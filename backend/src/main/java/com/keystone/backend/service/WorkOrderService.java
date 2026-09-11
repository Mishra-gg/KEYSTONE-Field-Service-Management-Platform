package com.keystone.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.keystone.backend.dto.WorkOrderAssignmentRequest;
import com.keystone.backend.dto.WorkOrderRequest;
import com.keystone.backend.dto.WorkOrderResponse;
import com.keystone.backend.entity.User;
import com.keystone.backend.entity.WorkOrder;
import com.keystone.backend.entity.WorkOrderHistory;
import com.keystone.backend.enums.Role;
import com.keystone.backend.enums.WorkOrderStatus;
import com.keystone.backend.repository.UserRepository;
import com.keystone.backend.repository.WorkOrderHistoryRepository;
import com.keystone.backend.repository.WorkOrderRepository;

@Service
public class WorkOrderService {

    private final WorkOrderRepository workOrderRepository;
    private final UserRepository userRepository;
    private final WorkOrderHistoryRepository workOrderHistoryRepository;

    public WorkOrderService(
            WorkOrderRepository workOrderRepository,
            UserRepository userRepository,
            WorkOrderHistoryRepository workOrderHistoryRepository) {

        this.workOrderRepository = workOrderRepository;
        this.userRepository = userRepository;
        this.workOrderHistoryRepository = workOrderHistoryRepository;
    }

    public WorkOrderResponse createWorkOrder(WorkOrderRequest request) {

        User customer = userRepository.findById(request.getCustomerId())
                .orElseThrow(() ->
                        new IllegalArgumentException("Customer not found"));

        if (customer.getRole() != Role.CUSTOMER) {
            throw new IllegalArgumentException(
                    "Selected user is not a customer");
        }

        LocalDateTime now = LocalDateTime.now();

        WorkOrder workOrder = new WorkOrder();

        workOrder.setTitle(request.getTitle());
        workOrder.setDescription(request.getDescription());
        workOrder.setPriority(request.getPriority());
        workOrder.setCustomer(customer);
        workOrder.setStatus(WorkOrderStatus.NEW);
        workOrder.setCreatedAt(now);
        workOrder.setUpdatedAt(now);

        WorkOrder saved = workOrderRepository.save(workOrder);

        return toResponse(saved);
    }

    public List<WorkOrderResponse> getAllWorkOrders() {

        return workOrderRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private WorkOrderResponse toResponse(WorkOrder workOrder) {

        WorkOrderResponse response = new WorkOrderResponse();

        response.setId(workOrder.getId());
        response.setTitle(workOrder.getTitle());
        response.setDescription(workOrder.getDescription());
        response.setPriority(workOrder.getPriority());
        response.setStatus(workOrder.getStatus());

        response.setCustomerId(
                workOrder.getCustomer().getId());

        response.setTechnicianId(
                workOrder.getTechnician() != null
                        ? workOrder.getTechnician().getId()
                        : null);

        response.setCreatedAt(workOrder.getCreatedAt());
        response.setUpdatedAt(workOrder.getUpdatedAt());

        return response;
    }

    @Transactional
    public WorkOrderResponse assignTechnician(
            Long workOrderId,
            WorkOrderAssignmentRequest request) {

        WorkOrder workOrder = workOrderRepository.findById(workOrderId)
                .orElseThrow(() ->
                        new IllegalArgumentException("Work order not found"));

        User technician = userRepository.findById(request.getTechnicianId())
                .orElseThrow(() ->
                        new IllegalArgumentException("Technician not found"));

        if (technician.getRole() != Role.TECHNICIAN) {
            throw new IllegalArgumentException(
                    "Selected user is not a technician");
        }

        if (workOrder.getStatus() != WorkOrderStatus.NEW) {
            throw new IllegalArgumentException(
                    "Only NEW work orders can be assigned");
        }

        WorkOrderStatus oldStatus = workOrder.getStatus();

        workOrder.setTechnician(technician);
        workOrder.setStatus(WorkOrderStatus.ASSIGNED);
        workOrder.setUpdatedAt(LocalDateTime.now());

        WorkOrder saved = workOrderRepository.save(workOrder);

        saveHistory(
                saved,
                oldStatus,
                WorkOrderStatus.ASSIGNED
        );

        return toResponse(saved);
    }

    @Transactional
    public WorkOrderResponse updateStatus(
            Long id,
            WorkOrderStatus newStatus) {

        WorkOrder workOrder = workOrderRepository.findById(id)
                .orElseThrow(() ->
                        new IllegalArgumentException("Work order not found"));

        WorkOrderStatus currentStatus = workOrder.getStatus();

        boolean valid = switch (currentStatus) {

            case NEW ->
                    newStatus == WorkOrderStatus.ASSIGNED;

            case ASSIGNED ->
                    newStatus == WorkOrderStatus.IN_PROGRESS;

            case IN_PROGRESS ->
                    newStatus == WorkOrderStatus.ON_HOLD
                    || newStatus == WorkOrderStatus.COMPLETED;

            case ON_HOLD ->
                    newStatus == WorkOrderStatus.IN_PROGRESS;

            case COMPLETED ->
                    newStatus == WorkOrderStatus.CLOSED;

            case CLOSED, CANCELLED ->
                    false;
        };

        if (!valid) {
            throw new IllegalArgumentException(
                    "Invalid status transition from "
                    + currentStatus + " to " + newStatus);
        }

        workOrder.setStatus(newStatus);
        workOrder.setUpdatedAt(LocalDateTime.now());

        WorkOrder saved = workOrderRepository.save(workOrder);

        saveHistory(
                saved,
                currentStatus,
                newStatus
        );

        return toResponse(saved);
    }

    private void saveHistory(
            WorkOrder workOrder,
            WorkOrderStatus oldStatus,
            WorkOrderStatus newStatus) {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User changedBy = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new IllegalArgumentException("User not found"));

        WorkOrderHistory history = new WorkOrderHistory();

        history.setWorkOrder(workOrder);
        history.setOldStatus(oldStatus);
        history.setNewStatus(newStatus);
        history.setChangedBy(changedBy);
        history.setChangedAt(LocalDateTime.now());

        workOrderHistoryRepository.save(history);
    }
}
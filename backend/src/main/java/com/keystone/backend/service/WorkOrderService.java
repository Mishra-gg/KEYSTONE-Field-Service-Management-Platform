package com.keystone.backend.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;
import com.keystone.backend.dto.WorkOrderAssignmentRequest;
import com.keystone.backend.dto.WorkOrderRequest;
import com.keystone.backend.dto.WorkOrderResponse;
import com.keystone.backend.entity.User;
import com.keystone.backend.entity.WorkOrder;
import com.keystone.backend.enums.Role;
import com.keystone.backend.enums.WorkOrderStatus;
import com.keystone.backend.repository.UserRepository;
import com.keystone.backend.repository.WorkOrderRepository;

@Service
public class WorkOrderService {

    private final WorkOrderRepository workOrderRepository;
    private final UserRepository userRepository;

    public WorkOrderService(
            WorkOrderRepository workOrderRepository,
            UserRepository userRepository) {

        this.workOrderRepository = workOrderRepository;
        this.userRepository = userRepository;
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
    public java.util.List<WorkOrderResponse> getAllWorkOrders() {

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

        workOrder.setTechnician(technician);
        workOrder.setStatus(WorkOrderStatus.ASSIGNED);
        workOrder.setUpdatedAt(LocalDateTime.now());

        WorkOrder saved = workOrderRepository.save(workOrder);

        return toResponse(saved);
    }
}
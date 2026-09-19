package com.keystone.backend.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.keystone.backend.dto.WorkOrderAssignmentRequest;
import com.keystone.backend.dto.WorkOrderHistoryResponse;
import com.keystone.backend.dto.WorkOrderRequest;
import com.keystone.backend.dto.WorkOrderResponse;
import com.keystone.backend.dto.WorkOrderStatusUpdateRequest;
import com.keystone.backend.enums.WorkOrderStatus;
import com.keystone.backend.service.WorkOrderService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/workorders")
public class WorkOrderController {

    private final WorkOrderService workOrderService;

    public WorkOrderController(WorkOrderService workOrderService) {
        this.workOrderService = workOrderService;
    }

    @PostMapping
    public ResponseEntity<WorkOrderResponse> createWorkOrder(
            @Valid @RequestBody WorkOrderRequest request) {

        WorkOrderResponse response =
                workOrderService.createWorkOrder(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
    
    @GetMapping
    public ResponseEntity<Page<WorkOrderResponse>> getAllWorkOrders(
            @RequestParam(required = false) WorkOrderStatus status,
            @RequestParam(required = false) String priority,
            Pageable pageable) {

        return ResponseEntity.ok(
                workOrderService.getAllWorkOrders(
                        status,
                        priority,
                        pageable
                )
        );
    }
    
    @PreAuthorize("hasAnyRole('ADMIN', 'DISPATCHER')")
    @PutMapping("/{id}/assign")
    public ResponseEntity<WorkOrderResponse> assignTechnician(
            @PathVariable Long id,
            @Valid @RequestBody WorkOrderAssignmentRequest request) {

        return ResponseEntity.ok(
                workOrderService.assignTechnician(id, request)
        );
    }
    
    @PreAuthorize("hasAnyRole('ADMIN', 'DISPATCHER', 'TECHNICIAN')")
    @PutMapping("/{id}/status")
    public ResponseEntity<WorkOrderResponse> updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody WorkOrderStatusUpdateRequest request) {

        return ResponseEntity.ok(
                workOrderService.updateStatus(id, request.getStatus())
        );
    }   
    @GetMapping("/{id}/history")
    public ResponseEntity<List<WorkOrderHistoryResponse>> getWorkOrderHistory(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                workOrderService.getWorkOrderHistory(id)
        );
    }
}
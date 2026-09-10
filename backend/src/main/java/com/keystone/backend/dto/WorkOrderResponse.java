package com.keystone.backend.dto;

import java.time.LocalDateTime;

import com.keystone.backend.enums.WorkOrderStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WorkOrderResponse {

    private Long id;
    private String title;
    private String description;
    private String priority;
    private WorkOrderStatus status;

    private Long customerId;
    private Long technicianId;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
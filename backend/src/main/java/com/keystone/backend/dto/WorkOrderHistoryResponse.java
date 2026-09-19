package com.keystone.backend.dto;

import java.time.LocalDateTime;

import com.keystone.backend.enums.WorkOrderStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WorkOrderHistoryResponse {

    private Long id;
    private Long workOrderId;
    private WorkOrderStatus oldStatus;
    private WorkOrderStatus newStatus;
    private Long changedBy;
    private LocalDateTime changedAt;
}
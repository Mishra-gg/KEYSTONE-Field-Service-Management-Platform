package com.keystone.backend.dto;

import com.keystone.backend.enums.WorkOrderStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WorkOrderStatusUpdateRequest {

    @NotNull
    private WorkOrderStatus status;
}
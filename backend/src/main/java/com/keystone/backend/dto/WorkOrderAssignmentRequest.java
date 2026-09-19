package com.keystone.backend.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WorkOrderAssignmentRequest {

    @NotNull
    private Long technicianId;
}
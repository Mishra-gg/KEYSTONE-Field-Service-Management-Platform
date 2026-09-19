package com.keystone.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.keystone.backend.entity.WorkOrder;
import com.keystone.backend.enums.WorkOrderStatus;

public interface WorkOrderRepository
        extends JpaRepository<WorkOrder, Long> {

    Page<WorkOrder> findByStatus(
            WorkOrderStatus status,
            Pageable pageable);

    Page<WorkOrder> findByPriority(
            String priority,
            Pageable pageable);

    Page<WorkOrder> findByStatusAndPriority(
            WorkOrderStatus status,
            String priority,
            Pageable pageable);
    Page<WorkOrder> findByCustomerId(
            Long customerId,
            Pageable pageable);

    Page<WorkOrder> findByTechnicianId(
            Long technicianId,
            Pageable pageable);
}
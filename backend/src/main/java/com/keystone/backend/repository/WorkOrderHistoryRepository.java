package com.keystone.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.keystone.backend.entity.WorkOrderHistory;

public interface WorkOrderHistoryRepository
        extends JpaRepository<WorkOrderHistory, Long> {

    List<WorkOrderHistory> findByWorkOrderIdOrderByChangedAtAsc(
            Long workOrderId);
}
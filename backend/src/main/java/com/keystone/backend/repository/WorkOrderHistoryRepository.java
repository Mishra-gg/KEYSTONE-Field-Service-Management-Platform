package com.keystone.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.keystone.backend.entity.WorkOrderHistory;

public interface WorkOrderHistoryRepository
        extends JpaRepository<WorkOrderHistory, Long> {
}
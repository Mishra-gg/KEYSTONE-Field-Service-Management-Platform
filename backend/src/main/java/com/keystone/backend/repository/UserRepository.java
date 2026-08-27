package com.keystone.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.keystone.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

}

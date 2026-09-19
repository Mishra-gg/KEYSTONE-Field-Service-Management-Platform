package com.keystone.backend.dto;

import com.keystone.backend.enums.Role;

import lombok.*;

@Getter
@Setter
public class UserResponse {
	
	private Long id;

    private String name;

    private String email;

    private Role role;

    private boolean active;

}

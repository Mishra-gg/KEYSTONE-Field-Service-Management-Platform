package com.keystone.backend.dto;

import com.keystone.backend.enums.Role;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
public class UserRequest {

	@NotBlank
	private String name;

	@NotBlank
	@Email
    private String email;
	
	@NotBlank
	@Size(min = 8)
    private String password;

	@NotNull
    private Role role;
}

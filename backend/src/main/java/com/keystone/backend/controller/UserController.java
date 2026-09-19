package com.keystone.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.keystone.backend.dto.UserRequest;
import com.keystone.backend.dto.UserResponse;
import com.keystone.backend.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private final UserService userService;
	public UserController(UserService userService)
	{
		this.userService=userService;
	}
	
	@PostMapping
	public ResponseEntity<UserResponse> createUser(
			@Valid @RequestBody UserRequest request)
	
	{
		UserResponse response=userService.createUser(request);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
		
	}

}

package com.keystone.backend.service;

import java.time.LocalDateTime;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.keystone.backend.dto.UserRequest;
import com.keystone.backend.dto.UserResponse;
import com.keystone.backend.entity.User;
import com.keystone.backend.repository.UserRepository;

@Service
public class UserService {
	
	private final PasswordEncoder passwordEncoder;
	private final UserRepository userRepository;
	
	
	public UserService(UserRepository userRepository,PasswordEncoder passwordEncoder)
	{
		this.userRepository=userRepository;
		this.passwordEncoder=passwordEncoder;
	}
	
	public UserResponse createUser(UserRequest request)
	{
		if(userRepository.existsByEmail(request.getEmail()))
		{
			throw new IllegalArgumentException("Email already exists");
		}
		
		String hashedPassword = passwordEncoder.encode(request.getPassword());

		LocalDateTime now = LocalDateTime.now();

		User user = new User(
		        request.getName(),
		        request.getEmail(),
		        hashedPassword,
		        request.getRole(),
		        true,
		        now,
		        now
		);
		
		User savedUser=userRepository.save(user);
		return toResponse(savedUser);
		
		
	}
	private UserResponse toResponse(User user)
	{
		UserResponse response = new UserResponse();

		response.setId(user.getId());
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setActive(user.isActive());

        return response;
	}

}

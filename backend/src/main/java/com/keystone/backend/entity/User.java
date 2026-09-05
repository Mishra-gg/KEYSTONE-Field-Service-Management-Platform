package com.keystone.backend.entity;

import java.time.LocalDateTime;

import com.keystone.backend.enums.Role;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // for JPA
@Entity
@Table(name="users")
//For application code
public class User {
	public User(
	        String name,
	        String email,
	        String passwordHash,
	        Role role,
	        boolean active,
	        LocalDateTime createdAt,
	        LocalDateTime updatedAt) {

	    this.name = name;
	    this.email = email;
	    this.passwordHash = passwordHash;
	    this.role = role;
	    this.active = active;
	    this.createdAt = createdAt;
	    this.updatedAt = updatedAt;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	private String name;
	
	
    private String email;

    @Column(name = "password_hash")
    private String passwordHash;

    @Enumerated(EnumType.STRING)
    private Role role;

    private boolean active;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    
}

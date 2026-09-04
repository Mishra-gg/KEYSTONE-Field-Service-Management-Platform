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
	public User(String name2, String email2, String hashedPassword, Role role2, boolean b, LocalDateTime now,
			LocalDateTime now2) {
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

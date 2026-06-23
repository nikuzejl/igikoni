package com.gura.gurisha.repository;

import java.util.Optional;

import com.gura.gurisha.entity.ERole;
import com.gura.gurisha.entity.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}

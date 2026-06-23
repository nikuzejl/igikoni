package com.gura.gurisha.repository;

import java.util.Optional;

import com.gura.gurisha.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
  Optional<User> findByEmail(String username);

  Boolean existsByEmail(String email);

  void deleteByEmail(String email);
}


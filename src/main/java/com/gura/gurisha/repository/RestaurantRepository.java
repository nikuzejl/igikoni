package com.gura.gurisha.repository;

import com.gura.gurisha.entity.Restaurant;
import com.gura.gurisha.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
    Optional<Restaurant> findByName(String name);
    void deleteByName(String name);
}


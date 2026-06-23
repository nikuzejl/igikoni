package com.gura.gurisha.repository;

import com.gura.gurisha.entity.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
    Order findByOrderId(long orderId);
    List<Order> findByStatus(String status);
}

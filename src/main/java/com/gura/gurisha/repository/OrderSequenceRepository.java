package com.gura.gurisha.repository;

import com.gura.gurisha.entity.OrderSequence;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderSequenceRepository extends MongoRepository<OrderSequence, String> {
    OrderSequence findByOrderType(String orderType);
}

package com.igikoni.controller;

import com.igikoni.entity.Order;
import com.igikoni.service.OrderNumberService;
import com.igikoni.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @Autowired
    OrderNumberService orderNumberService;

    @PostMapping("/submit")
    public long submitOrder(@RequestBody Order order) throws Exception {
        var orderId = orderNumberService.getNextOrderNumber("client_order");
        order.setOrderId(orderId);
        var submittedOrder = orderService.createOrder(order);
        return submittedOrder.getOrderId();
    }

    @PatchMapping("/{orderId}")
    public String updateOrderFirstName(
            @PathVariable long orderId,
            @RequestParam String newStatus) {
        orderService.updateOrderStatus(orderId, newStatus);
        return "Order status updated successfully.";
    }

    @GetMapping("active")
    public List<Order> getActiveOrders() {
        return orderService.getOrdersByStatus("CREATED");
    }

    @GetMapping("completed")
    public List<Order> getCompletedOrders() {
        return orderService.getOrdersByStatus("COMPLETED");
    }

    @GetMapping("cancelled")
    public List<Order> getCancelledOrders() {
        return orderService.getOrdersByStatus("CANCELLED");
    }
}

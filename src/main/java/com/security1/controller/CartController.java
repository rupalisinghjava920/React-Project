package com.security1.controller;

import com.security1.model.CartItem;
import com.security1.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartItemRepository cartItemRepository;

    @PostMapping("/cart")
    public ResponseEntity<String> addToCart(@RequestBody CartItem item) {
        cartItemRepository.save(item);
        return ResponseEntity.ok("Added to cart");
    }
}


package com.security1.controller;


import com.security1.model.CartItem;
import com.security1.model.Product;
import com.security1.model.User;
import com.security1.repository.CartItemRepository;
import com.security1.repository.ProductRepository;
import com.security1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CartItemRepository cartItemRepository;


    @PostMapping("/cart")
    public ResponseEntity<String> addToCart(@RequestBody CartItem item) {
//        System.out.println("Product ID: " + (item.getProduct() != null ? item.getProduct().getId() : "NULL"));
        cartItemRepository.save(item);
        return ResponseEntity.ok("Added to cart");
    }

    @GetMapping("/allcart")
    public ResponseEntity<?> getAllCart(){
        List<CartItem> items=cartItemRepository.findAll();
        return ResponseEntity.ok(items);
    }
//    @GetMapping("/cart/{userId}")
//    public ResponseEntity<List<CartItem>> getCart(@PathVariable Long userId) {
//        return ResponseEntity.ok(cartItemRepository.findByUserId(userId));
//    }

    @DeleteMapping("/cart/{userId}/{productId}")
    public ResponseEntity<?> removeItem(@PathVariable Long userId, @PathVariable Long productId) {
        System.out.println("Removing product: " + productId + " for user: " + userId);
        cartItemRepository.deleteByUserIdAndProductId(userId, productId);
        return ResponseEntity.ok("Item removed from cart");
    }

    @DeleteMapping("/clear/{userId}")
    public ResponseEntity<?> clearCart(@PathVariable Long userId) {
        List<CartItem> items = cartItemRepository.findByUserId(userId);
        if (items.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cart is already empty");
        }
        cartItemRepository.deleteAll(items);
        return ResponseEntity.ok("Cart cleared");
    }
}


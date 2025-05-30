package com.security1.controller;

import com.security1.model.Product;
import com.security1.model.User;
import com.security1.repository.UserRepository;
import com.security1.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductService productService;

    @PostMapping("/product")
    public ResponseEntity<String> saveProduct(
            @RequestParam("productName") String productName,
            @RequestParam("price") Long price,
            @RequestParam("quantity") int quantity,
            @RequestParam("weight") String weight,
            @RequestParam("brand") String brand,
            @RequestParam("discount") String discount,
            @RequestParam("description") String description,
            @RequestParam("image") MultipartFile image
    ) {
        try {
            productService.saveProduct(productName, price, quantity, weight, brand, discount, description, image);
            return ResponseEntity.ok("Product saved successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Product save failed");
        }
    }

    @GetMapping("/products")
    public ResponseEntity<?> getAllProduct(){
        List<Product> productList=productService.getAllProduct();
        return ResponseEntity.ok(productList);
    }

//    @PutMapping("/products/{id}")
//    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
//        Product updatedProduct = productService.updateProduct(id, product);
//        return ResponseEntity.ok(updatedProduct);
//    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long id,
            @RequestPart("product") Product product,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {

        Product updatedProduct = productService.updateProduct(id, product, image);
        return ResponseEntity.ok(updatedProduct);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> product = productService.getProductById(id);
        return product.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        try {
            productService.deleteProductById(id);
            return ResponseEntity.ok("Product deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete product.");
        }
    }




}

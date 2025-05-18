package com.security1.service;

import com.security1.model.Product;
import com.security1.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

//    public Product save(Product product){
//        return productRepository.save(product);
//    }

    private final String uploadDir = System.getProperty("user.dir") + "/uploads/";


    public Product saveProduct(
            String productName, Long price, int quantity, String weight,
            String brand, String discount, String description, MultipartFile imageFile
    ) throws IOException {

        String fileName = StringUtils.cleanPath(imageFile.getOriginalFilename());
        File uploadPath = new File(uploadDir);
        if (!uploadPath.exists()) {
            uploadPath.mkdirs();
        }

        File dest = new File(uploadDir + fileName);

        imageFile.transferTo(dest);

        Product product = new Product();
        product.setProductName(productName);
        product.setPrice(price);
        product.setQuantity(quantity);
        product.setWeight(weight);
        product.setBrand(brand);
        product.setDiscount(discount);
        product.setDescription(description);
        product.setImage(fileName);

        return productRepository.save(product);
    }
    public List<Product> getAllProduct(){
        return  productRepository.findAll();
    }



public Product updateProduct(Long id, Product updatedProduct, MultipartFile image) throws IOException {
    Optional<Product> optionalProduct = productRepository.findById(id);

    if (!optionalProduct.isPresent()) {
        throw new RuntimeException("Product not found with ID: " + id);
    }

    Product existingProduct = optionalProduct.get();

    // Update fields
    existingProduct.setProductName(updatedProduct.getProductName());
    existingProduct.setPrice(updatedProduct.getPrice());
    existingProduct.setQuantity(updatedProduct.getQuantity());
    existingProduct.setWeight(updatedProduct.getWeight());
    existingProduct.setBrand(updatedProduct.getBrand());
    existingProduct.setDiscount(updatedProduct.getDiscount());
    existingProduct.setDescription(updatedProduct.getDescription());

    // Update image if provided
    if (image != null && !image.isEmpty()) {
        String fileName = saveImageToFileSystem(image);
        existingProduct.setImage(fileName);
    }

    return productRepository.save(existingProduct);
}

    private String saveImageToFileSystem(MultipartFile file) throws IOException {
//        String uploadDir = "D:/Rupali/SpringbootwithReactproject/Spring-Boot-0.1/uploads/";
//        String uploadDir ="D:/Rupali/img/
        String uploadDir ="uploads/";
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        return fileName;
    }



    public void deleteProductById(Long id){
        productRepository.deleteById(id);

    }
}

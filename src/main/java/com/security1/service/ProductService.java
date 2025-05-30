package com.security1.service;

import com.security1.model.Product;
import com.security1.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
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

    private final String uploadDir = System.getProperty("user.dir") + "/uploads/";


    public Product saveProduct(
            String productName, Long price, int quantity, String weight,
            String brand, String discount, String description, MultipartFile imageFile
    ) throws IOException {

        String originalFileName = StringUtils.cleanPath(imageFile.getOriginalFilename());
        if (originalFileName == null || !originalFileName.matches("(?i).*\\.(jpg|jpeg|png)$")) {
            throw new IOException("Only JPG, JPEG, or PNG images are allowed");
        }
        String fileName = StringUtils.cleanPath(imageFile.getOriginalFilename());
        File uploadPath = new File(uploadDir);
        if (!uploadPath.exists()) {
            uploadPath.mkdirs();
        }
        System.out.println("Upload directory: " + uploadDir);

        File dest = new File(uploadDir , fileName);
        try {
            imageFile.transferTo(dest);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Image upload failed", e);
        }
        System.out.println("Uploaded file: " + imageFile.getOriginalFilename());
        System.out.println("Image file received: " + imageFile.getOriginalFilename());
        System.out.println("Content type: " + imageFile.getContentType());
        System.out.println("Size: " + imageFile.getSize());


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

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

public Product updateProduct(Long id, Product updatedProduct, MultipartFile image) throws IOException {
    Optional<Product> optionalProduct = productRepository.findById(id);

    if (!optionalProduct.isPresent()) {
        throw new RuntimeException("Product not found with ID: " + id);
    }
    Product existingProduct = optionalProduct.get();
    existingProduct.setProductName(updatedProduct.getProductName());
    existingProduct.setPrice(updatedProduct.getPrice());
    existingProduct.setQuantity(updatedProduct.getQuantity());
    existingProduct.setWeight(updatedProduct.getWeight());
    existingProduct.setBrand(updatedProduct.getBrand());
    existingProduct.setDiscount(updatedProduct.getDiscount());
    existingProduct.setDescription(updatedProduct.getDescription());

    if (image != null && !image.isEmpty()) {
        String fileName = saveImageToFileSystem(image);
        existingProduct.setImage(fileName);
    }
    return productRepository.save(existingProduct);
}
    private String saveImageToFileSystem(MultipartFile file) throws IOException {
        String uploadDir ="uploads/";
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        try (InputStream inputStream = file.getInputStream()) {
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        }
        return fileName;
    }

    public void deleteProductById(Long id){
        productRepository.deleteById(id);

    }


}

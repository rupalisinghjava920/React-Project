package com.security1.repository;

import com.security1.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    List<CartItem> findByUserId(Long userId);
    @Transactional
    void deleteByUserIdAndProductId(Long userId, Long productId);

//    @Modifying
//    @Transactional
//    @Query("DELETE FROM CartItem c WHERE c.user.id = :userId AND c.product.id = :productId")
//    void deleteByUserIdAndProductId(@Param("userId") Long userId, @Param("productId") Long productId);


}


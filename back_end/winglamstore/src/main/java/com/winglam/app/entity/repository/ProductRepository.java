package com.winglam.app.entity.repository;

import com.winglam.app.entity.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
}

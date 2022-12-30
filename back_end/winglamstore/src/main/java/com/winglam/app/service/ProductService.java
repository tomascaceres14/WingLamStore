package com.winglam.app.service;

import com.winglam.app.entity.model.Product;
import com.winglam.app.entity.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Product save(Product event) {
        return repository.save(event);
    }

    public Product findById(String id){
        return repository.findById(id).orElse(null);
    }

    public List<Product> findAll(){
        return repository.findAll();
    }
}

package com.winglam.app.controller;

import com.winglam.app.entity.model.Event;
import com.winglam.app.entity.model.Product;
import com.winglam.app.service.ProductService;
import com.winglam.app.service.tools.EmailSenderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {

    ProductService service;
    EmailSenderService emailService;

    public ProductController(ProductService service, EmailSenderService emailService) {
        this.service = service;
        this.emailService = emailService;
    }

    @GetMapping()
    public ResponseEntity<List<Product>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable String id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping()
    public ResponseEntity<Product> save(@RequestBody Product product){
        return ResponseEntity.ok(service.save(product));
    }
}

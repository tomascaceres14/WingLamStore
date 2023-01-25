package com.winglam.app.controller;

import com.winglam.app.entity.dto.ProductDTO;
import com.winglam.app.entity.model.Product;
import com.winglam.app.service.ProductService;
import com.winglam.app.service.tools.EmailSenderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    ProductService service;
    EmailSenderService emailService;

    public ProductController(ProductService service, EmailSenderService emailService) {
        this.service = service;
        this.emailService = emailService;
    }

    @GetMapping()
    public ResponseEntity<List<ProductDTO>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> findById(@PathVariable String id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping()
    public ResponseEntity<ProductDTO> save(@RequestBody Product product){
        return ResponseEntity.ok(service.save(product));
    }
}

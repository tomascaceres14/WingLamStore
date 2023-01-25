package com.winglam.app.service;

import com.winglam.app.entity.dto.ProductDTO;
import com.winglam.app.entity.model.Product;
import com.winglam.app.entity.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public ProductDTO save(Product event) {
        ModelMapper mapper = new ModelMapper();
        return mapper.map( repository.save(event), ProductDTO.class);
    }

    public ProductDTO findById(String id){
        ModelMapper mapper = new ModelMapper();
        return mapper.map(repository.findById(id).orElse(null), ProductDTO.class);
    }

    public List<ProductDTO> findAll(){
        List<Product> productsList = repository.findAll();
        List<ProductDTO> productsListDTO = new ArrayList<>();
        ModelMapper mapper = new ModelMapper();

        return productsList
                .stream()
                .map(user -> mapper.map(user, ProductDTO.class))
                .collect(Collectors.toList());
    }
}

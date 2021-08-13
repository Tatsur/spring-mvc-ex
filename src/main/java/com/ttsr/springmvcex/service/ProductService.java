package com.ttsr.springmvcex.service;

import com.ttsr.springmvcex.model.Product;
import com.ttsr.springmvcex.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public Product findById(Long id){
        return productRepository
                .findById(id)
                .orElseThrow(()-> new NoSuchElementException(String.format("Product with id = %s wasn't found",id)));
    }

    public Product save(Product product){
        return productRepository.save(product);
    }

    public void deleteById(Long id){
        productRepository.deleteById(id);
    }
}

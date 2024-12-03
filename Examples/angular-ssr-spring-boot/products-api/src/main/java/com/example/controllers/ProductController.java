package com.example.controllers;

import com.example.entities.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.RequestScope;
import java.util.List;

@RestController
@RequestScope
@RequestMapping(value = "api/products/")
public class ProductController {
    @GetMapping
    public List<Product> getAll() {
        return List.of(
                new Product(1, "Product 1", "https://dummyjson.com/image/100"),
                new Product(2, "Product 2", "https://dummyjson.com/image/200"),
                new Product(3, "Product 3", "https://dummyjson.com/image/300"),
                new Product(4, "Product 4", "https://dummyjson.com/image/400"),
                new Product(5, "Product 5", "https://dummyjson.com/image/500")
        );
    }
}

package com.demo.service;

import java.util.List;

import com.demo.beans.Product;

public interface ProductService {
List <Product> getAllProducts();

int addtocart(int pid, int custid,float price);

List<Product> showcart(int custid);

Product getProduct(int pid);

int removeProductFromCart(int pid);
}

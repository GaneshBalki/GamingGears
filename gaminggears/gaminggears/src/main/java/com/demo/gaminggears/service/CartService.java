package com.demo.gaminggears.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Cart;
import com.demo.gaminggears.entity.CartBody;
import com.demo.gaminggears.entity.Customer;
import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.repository.CartRepository;
import com.demo.gaminggears.repository.CustomerRepository;
import com.demo.gaminggears.repository.ProductRepository;

@Service
public class CartService implements ICartService{
	@Autowired
	CartRepository cartRepository;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	CustomerRepository customerRepository;
	@Override
	public void addtoCart(CartBody cartBody) {
		// TODO Auto-generated method stub
		System.out.println("customer id "+cartBody.getCustid());
		if(cartRepository.existsByCustIdProdId(cartBody.getCustid(),cartBody.getProid()) != null) {
			Product p = productRepository.getById(cartBody.getProid());
			Cart existsCart = cartRepository.existsByCustIdProdId(cartBody.getCustid(),cartBody.getProid());
			existsCart.setQty(existsCart.getQty()+1);
			existsCart.setPrice(p.getPrice()*existsCart.getQty());
			cartRepository.updateCart(existsCart.getQty(),existsCart.getCartid());
		}else {
			Product p = productRepository.getById(cartBody.getProid());
			System.out.println(p);
			Customer c = customerRepository.getById(cartBody.getCustid());
			Cart newCart = new Cart(c, p, 1, p.getPrice());
			cartRepository.save(newCart);
		}
	}

	@Override
	public List<Cart> getCart(int custID) {
		// TODO Auto-generated method stub
		return cartRepository.findAllByCustId(custID);
	}

}

package com.demo.gaminggears.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Customer;
import com.demo.gaminggears.entity.Orders;
import com.demo.gaminggears.entity.OrdersBody;
import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.repository.CustomerRepository;
import com.demo.gaminggears.repository.OrderRepository;
import com.demo.gaminggears.repository.ProductRepository;

@Service
public class OrderService implements IOrderService{

	@Autowired
	OrderRepository orderRepository;
	@Autowired
	CustomerRepository customerRepository;
	@Autowired
	ProductRepository productRepository;
	
	@Override
	public List<Orders> getAllOrderbyCustID(int custid) {
		// TODO Auto-generated method stub
		return orderRepository.getAllOrderbyCustID(custid);
	}

	@Override
	public void addtoOrder(OrdersBody ob) {
		System.out.println("order price : "+ob.getPrice());
		Customer c = customerRepository.findById(ob.getCustid()).orElse(null);
		Product p = productRepository.findById(ob.getProid()).orElse(null);
		Orders o = new Orders(c,p,LocalDateTime.now().toString(),ob.getStatus(),"CashOnDelivery",ob.getPrice(),""+c.getCustId()+LocalDateTime.now().toString(),ob.getAddress());
		orderRepository.save(o);
	}

}
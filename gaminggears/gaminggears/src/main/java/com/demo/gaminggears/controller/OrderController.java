package com.demo.gaminggears.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.gaminggears.entity.Orders;
import com.demo.gaminggears.entity.OrdersBody;
import com.demo.gaminggears.service.IOrderService;

@CrossOrigin(origins = "*")
@RestController
public class OrderController {

	@Autowired
	IOrderService iOrderService;
	
	@GetMapping("/order/history/{custid}")
	public List<Orders> getAllOrderbyCustID(@PathVariable int custid){
		List<Orders> olist = iOrderService.getAllOrderbyCustID(custid);
		return olist;
	}
	@PostMapping("/buy/now")
	public ResponseEntity<String> addtoOrder(@RequestBody OrdersBody ob){
		iOrderService.addtoOrder(ob);
		return ResponseEntity.ok("added successfully");
	}
	
}

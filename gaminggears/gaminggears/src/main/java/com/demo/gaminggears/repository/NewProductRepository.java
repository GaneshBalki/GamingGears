package com.demo.gaminggears.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.Assembly;
import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.entity.ProductNew;

import java.util.List;

	@Repository
	public interface NewProductRepository extends JpaRepository<ProductNew, Integer>{
	    
	
	}

package com.demo.gaminggears.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.gaminggears.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}

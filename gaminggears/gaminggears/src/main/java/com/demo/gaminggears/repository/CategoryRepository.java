package com.demo.gaminggears.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.gaminggears.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{

}

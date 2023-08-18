package com.demo.gaminggears.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.Assembly;
@Repository
public interface AssemblyRepository extends JpaRepository<Assembly, Integer>{

	// Custom query using native SQL
    @Query(value = "SELECT * FROM buildunit WHERE expid = ?1", nativeQuery = true)
    List<Assembly> findByExpertId(int expid);
}

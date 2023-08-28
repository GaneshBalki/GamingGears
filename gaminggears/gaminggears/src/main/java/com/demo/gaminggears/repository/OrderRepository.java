package com.demo.gaminggears.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.Orderproducts;
import com.demo.gaminggears.entity.Orders;
import com.demo.gaminggears.entity.SalesStatisticsDTO;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer>{

	@Query(value = "SELECT * FROM orders WHERE custid = ?1", nativeQuery = true)
	List<Orders> getAllOrderbyCustID(int custid);
	
	@Query("SELECT NEW com.demo.gaminggears.entity.SalesStatisticsDTO(p.id, p.name, COUNT(o.product.id), SUM(o.price)) " +
	           "FROM Orders o " +
	           "JOIN o.product p " +
	           "WHERE p.distributor.id = :disid " +
	           "GROUP BY p.id, p.name")
	    List<SalesStatisticsDTO> findSalesStatisticsByDistributorId(int disid);

}


package com.demo.gaminggears.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.SalesStatisticsDTO;

import java.util.List;

	@Repository
	public interface DistributorRepository extends JpaRepository<Distributor, Integer>{

		@Query(value = "SELECT * FROM distributor WHERE email = ?1", nativeQuery = true)
		List<Distributor> getDistributorByEmail(String email);
		
		@Query(value = "SELECT o.proid as proid, p.proname as proname, count(o.proid) as qtysold, SUM(o.price) AS sales " +
	               "FROM Orders o " +
	               "JOIN Product p ON o.proid = p.proid " +
	               "JOIN Distributor d ON p.disid = d.disid " +
	               "WHERE d.disid = ?1 " +
	               "GROUP BY o.proid", nativeQuery = true, name = "Mapp" )
	List<SalesStatisticsDTO> findSalesStatisticsByDistributorId(int distributorId);

	    
		
		
	}


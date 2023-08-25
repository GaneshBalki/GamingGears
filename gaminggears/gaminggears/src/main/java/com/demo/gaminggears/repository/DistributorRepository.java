
package com.demo.gaminggears.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.gaminggears.entity.DisSalesStats;
import com.demo.gaminggears.entity.Distributor;
import java.util.List;

	@Repository
	public interface DistributorRepository extends JpaRepository<Distributor, Integer>{

		@Query(value = "SELECT * FROM distributor WHERE email = ?1", nativeQuery = true)
		List<Distributor> getDistributorByEmail(String email);

		@Query(value = "SELECT\r\n"
			    + "o.proid, p.proname, count(o.proid) as qtysold,  SUM(o.price) AS sales\r\n"
			    + "FROM\r\n"
			    + "    Orders o\r\n"
			    + "JOIN\r\n"
			    + "    Product p ON o.proid = p.proid\r\n"
			    + "JOIN\r\n"
			    + "    Distributor d ON p.disid = d.disid\r\n"
			    + "WHERE\r\n"
			    + "    d.disid = ?1 group by o.proid", nativeQuery = true)
		List<DisSalesStats> getDisSalesStats(int disid);
	    
		
		
	}


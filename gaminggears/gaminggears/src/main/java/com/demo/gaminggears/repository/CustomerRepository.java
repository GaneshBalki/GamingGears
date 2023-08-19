import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.demo.gaminggears.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    @Transactional
    @Modifying
    @Query(value = "UPDATE Customer c SET c.pass = ?2 WHERE c.email = ?1")
    void updatePassword(String email, String pass);
}

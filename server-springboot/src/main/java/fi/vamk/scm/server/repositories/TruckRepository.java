package fi.vamk.scm.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import fi.vamk.scm.server.entities.Truck;

public interface TruckRepository extends JpaRepository<Truck, Integer>  {

}

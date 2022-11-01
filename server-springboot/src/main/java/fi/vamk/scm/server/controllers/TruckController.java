package fi.vamk.scm.server.controllers;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fi.vamk.scm.server.entities.Truck;
import fi.vamk.scm.server.repositories.TruckRepository;

@RestController


public class TruckController {
	 @Autowired TruckRepository repository;
	 
	 @GetMapping("/api/truck")
	 public List<Truck> readAll(){
		 return repository.findAll();
	 }
	 
	 @GetMapping("/api/truck/detail")
	 public Optional<Truck> readById(@RequestParam int truckId){
		 return repository.findById(truckId);
	 }
}
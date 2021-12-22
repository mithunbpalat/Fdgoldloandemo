package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Fdcustomer;
import com.app.service.FdcustomerService;

@RestController
@CrossOrigin("*")
public class FdcustomerController {
	@Autowired
	private FdcustomerService fdcustomerServ;
	
	@PostMapping(value="postfdcustomer")
	public List<Fdcustomer> saveFdcustomer(@RequestBody Fdcustomer fdcustomer){
		System.out.println("Fdcustomer works");
		fdcustomerServ.saveFdcustomer(fdcustomer);
		return fdcustomerServ.getAllFdcustomers();
	}
	@PutMapping(value="updatefdcustomer")
	public List<Fdcustomer> updateFdcustomer(@RequestBody Fdcustomer fdcustomer){
		System.out.println("Fdcustomer update works");
		fdcustomerServ.updateFdcustomer(fdcustomer);
		return fdcustomerServ.getAllFdcustomers();
	}
	@GetMapping(value="getallfdcustomers")
	public List<Fdcustomer> getAllFdcustomer(){
		return fdcustomerServ.getAllFdcustomers();
	}
	@DeleteMapping(value="deletefdcustomerbyid")
	public List<Fdcustomer> deleteFdcustomer(@RequestParam int fdcid){
		fdcustomerServ.deleteFdcustomer(fdcid);
		return fdcustomerServ.getAllFdcustomers();
	}
	@GetMapping(value="getfdcustomerbyid")
	public Fdcustomer getFdcustomerById(@RequestParam int fdcid){
		return fdcustomerServ.findFdcustomerByFdcid(fdcid);
	}
	@GetMapping(value="getfdcustomerbyyear")
	public List<Fdcustomer> getFdcustomerByYear(@RequestParam String year){
		return fdcustomerServ.getFdcustomersByYear(year);
	}
	@GetMapping(value="getfdcustomerbymonth")
	public List<Fdcustomer> getFdcustomerByMonth(@RequestParam String month){
		return fdcustomerServ.getFdcustomersByMonth(month);
	}
	@GetMapping(value="getfdcustomerbydate")
	public List<Fdcustomer> getFdcustomerByDate(@RequestParam String date){
		return fdcustomerServ.getFdcustomersByDate(date);
	}
}



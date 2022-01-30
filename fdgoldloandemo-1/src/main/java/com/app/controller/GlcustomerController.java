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

import com.app.model.Glcustomer;
import com.app.service.GlcustomerService;

@RestController
@CrossOrigin("*")
public class GlcustomerController {
	@Autowired
	private GlcustomerService glcustomerServ;
	
	@PostMapping(value="postglcustomer")
	public List<Glcustomer> saveGlcustomer(@RequestBody Glcustomer glcustomer){
		System.out.println("Glcustomer works");
		glcustomerServ.saveGlcustomer(glcustomer);
		return glcustomerServ.getAllGlcustomers();
	}
	@PutMapping(value="updateglcustomer")
	public List<Glcustomer> updateGlcustomer(@RequestBody Glcustomer glcustomer){
		System.out.println("Glcustomer update works");
		glcustomerServ.updateGlcustomer(glcustomer);
		return glcustomerServ.getAllGlcustomers();
	}
	@GetMapping(value="getallglcustomers")
	public List<Glcustomer> getAllGlcustomer(){
		return glcustomerServ.getAllGlcustomers();
	}
	@DeleteMapping(value="deleteglcustomerbyid")
	public List<Glcustomer> deleteGlcustomer(@RequestParam int glcid){
		glcustomerServ.deleteGlcustomer(glcid);
		return glcustomerServ.getAllGlcustomers();
	}
	@GetMapping(value="getglcustomerbyid")
	public Glcustomer getGlcustomerById(@RequestParam int glcid){
		return glcustomerServ.findGlcustomerByGlcid(glcid);
	}
	@GetMapping(value="getglcustomerbyyear")
	public List<Glcustomer> getGlcustomerByYear(@RequestParam String year){
		return glcustomerServ.getGlcustomersByYear(year);
	}
	@GetMapping(value="getglcustomerbymonth")
	public List<Glcustomer> getGlcustomerByMonth(@RequestParam String month){
		return glcustomerServ.getGlcustomersByMonth(month);
	}
	@GetMapping(value="getglcustomerbydate")
	public List<Glcustomer> getGlcustomerByDate(@RequestParam String date){
		return glcustomerServ.getGlcustomersByDate(date);
	}
}



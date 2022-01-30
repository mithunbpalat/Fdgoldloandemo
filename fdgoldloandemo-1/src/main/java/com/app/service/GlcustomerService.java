package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.GlcustomerRepository;
import com.app.model.Glcustomer;

@Service
public class GlcustomerService {
	@Autowired
	private GlcustomerRepository glcustomerRepo;
	public Glcustomer saveGlcustomer(Glcustomer glcustomer) {
		return glcustomerRepo.save(glcustomer);
	}
	public Glcustomer updateGlcustomer(Glcustomer glcustomer) {
		return glcustomerRepo.save(glcustomer);
	}
	public List<Glcustomer> getAllGlcustomers() {
		return (List<Glcustomer>) glcustomerRepo.findAll();
	}
	public void deleteGlcustomer(int glcid) {
		glcustomerRepo.deleteById(glcid);
	}
	public Glcustomer findGlcustomerByGlcid(int glcid) {
		return glcustomerRepo.findById(glcid).get();
	}
	public List<Glcustomer> getGlcustomersByYear(String year) {
		return (List<Glcustomer>) glcustomerRepo.findByYear(year);
	}
	public List<Glcustomer> getGlcustomersByMonth(String month) {
		return (List<Glcustomer>) glcustomerRepo.findByMonth(month);
	}
	public List<Glcustomer> getGlcustomersByDate(String date) {
		return (List<Glcustomer>) glcustomerRepo.findByDate(date);
	}
}

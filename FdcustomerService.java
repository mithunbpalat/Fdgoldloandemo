package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.FdcustomerRepository;
import com.app.model.Fdcustomer;

@Service
public class FdcustomerService {
	@Autowired
	private FdcustomerRepository fdcustomerRepo;
	public Fdcustomer saveFdcustomer(Fdcustomer fdcustomer) {
		return fdcustomerRepo.save(fdcustomer);
	}
	public Fdcustomer updateFdcustomer(Fdcustomer fdcustomer) {
		return fdcustomerRepo.save(fdcustomer);
	}
	public List<Fdcustomer> getAllFdcustomers() {
		return (List<Fdcustomer>) fdcustomerRepo.findAll();
	}
	public void deleteFdcustomer(int fdcid) {
		fdcustomerRepo.deleteById(fdcid);
	}
	public Fdcustomer findFdcustomerByFdcid(int fdcid) {
		return fdcustomerRepo.findById(fdcid).get();
	}
	public List<Fdcustomer> getFdcustomersByYear(String year) {
		return (List<Fdcustomer>) fdcustomerRepo.findByYear(year);
	}
	public List<Fdcustomer> getFdcustomersByMonth(String month) {
		return (List<Fdcustomer>) fdcustomerRepo.findByMonth(month);
	}
	public List<Fdcustomer> getFdcustomersByDate(String date) {
		return (List<Fdcustomer>) fdcustomerRepo.findByDate(date);
	}
}



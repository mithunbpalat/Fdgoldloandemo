package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Glcustomer;

@Repository
public interface GlcustomerRepository extends JpaRepository<Glcustomer, Integer>{

	@Query("SELECT d FROM Glcustomer d where d.year= ?1")
	List<Glcustomer> findByYear(String year);
	
	@Query("SELECT d FROM Glcustomer d where d.month= ?1")
	List<Glcustomer> findByMonth(String month);
	
	@Query("SELECT d FROM Glcustomer d where d.date= ?1")
	List<Glcustomer> findByDate(String date);
}

package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Fdcustomer;

@Repository
public interface FdcustomerRepository extends JpaRepository<Fdcustomer, Integer>{
	
	@Query("SELECT d FROM Fdcustomer d where d.year= ?1")
	List<Fdcustomer> findByYear(String year);
	
	@Query("SELECT d FROM Fdcustomer d where d.month=?1")
	List<Fdcustomer> findByMonth(String month);
	
	@Query("SELECT d FROM Fdcustomer d where d.date= ?1")
	List<Fdcustomer> findByDate(String date);
}

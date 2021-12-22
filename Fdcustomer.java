package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="fdcustomer",catalog="fdgoldloandemodatabase")
public class Fdcustomer {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  private int fdcid;
      private String firstname;
      private String lastname;
      private String address;
      private String dob;
      private String pan;
      private String gender;
      private String kyc;
      private String email;
      private String date;
      private String month;
      private String year;
      private String phone;
      private String joinapplicant;
      private int principal;
      private int period;
      private String nominee;
      private int rate;
      private String payout;
      private int amountavailable;
      private int amountwithdrawn;
      private String amountwithdrawndate;
      private int balance;
      private String status;
	public Fdcustomer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Fdcustomer(int fdcid, String firstname, String lastname, String address, String dob, String pan,
			String gender, String kyc, String email, String date, String month, String year, String phone,
			String joinapplicant, int principal, int period, String nominee, int rate, String payout,
			int amountavailable, int amountwithdrawn, String amountwithdrawndate, int balance, String status) {
		super();
		this.fdcid = fdcid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.dob = dob;
		this.pan = pan;
		this.gender = gender;
		this.kyc = kyc;
		this.email = email;
		this.date = date;
		this.month = month;
		this.year = year;
		this.phone = phone;
		this.joinapplicant = joinapplicant;
		this.principal = principal;
		this.period = period;
		this.nominee = nominee;
		this.rate = rate;
		this.payout = payout;
		this.amountavailable = amountavailable;
		this.amountwithdrawn = amountwithdrawn;
		this.amountwithdrawndate = amountwithdrawndate;
		this.balance = balance;
		this.status = status;
	}
	public int getFdcid() {
		return fdcid;
	}
	public void setFdcid(int fdcid) {
		this.fdcid = fdcid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getKyc() {
		return kyc;
	}
	public void setKyc(String kyc) {
		this.kyc = kyc;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getJoinapplicant() {
		return joinapplicant;
	}
	public void setJoinapplicant(String joinapplicant) {
		this.joinapplicant = joinapplicant;
	}
	public int getPrincipal() {
		return principal;
	}
	public void setPrincipal(int principal) {
		this.principal = principal;
	}
	public int getPeriod() {
		return period;
	}
	public void setPeriod(int period) {
		this.period = period;
	}
	public String getNominee() {
		return nominee;
	}
	public void setNominee(String nominee) {
		this.nominee = nominee;
	}
	public int getRate() {
		return rate;
	}
	public void setRate(int rate) {
		this.rate = rate;
	}
	public String getPayout() {
		return payout;
	}
	public void setPayout(String payout) {
		this.payout = payout;
	}
	public int getAmountavailable() {
		return amountavailable;
	}
	public void setAmountavailable(int amountavailable) {
		this.amountavailable = amountavailable;
	}
	public int getAmountwithdrawn() {
		return amountwithdrawn;
	}
	public void setAmountwithdrawn(int amountwithdrawn) {
		this.amountwithdrawn = amountwithdrawn;
	}
	public String getAmountwithdrawndate() {
		return amountwithdrawndate;
	}
	public void setAmountwithdrawndate(String amountwithdrawndate) {
		this.amountwithdrawndate = amountwithdrawndate;
	}
	public int getBalance() {
		return balance;
	}
	public void setBalance(int balance) {
		this.balance = balance;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
        
    
}

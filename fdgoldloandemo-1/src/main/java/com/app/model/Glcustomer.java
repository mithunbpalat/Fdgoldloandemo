package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="glcustomer",catalog="fdgoldloandemodatabase")
public class Glcustomer {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int glcid;
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
    private String coapplicant;
    private String interestpayment;
    private String ornament;
    private String carat;
    private int netweight;
    private int totalvalue;
    private int loanamount;
    private int moneyrepaid;
    private int moneydepositednow;
    private int balance;
    private String status;
	public Glcustomer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Glcustomer(int glcid, String firstname, String lastname, String address, String dob, String pan,
			String gender, String kyc, String email, String date, String month, String year, String phone,
			String coapplicant, String interestpayment, String ornament, String carat, int netweight, int totalvalue,
			int loanamount, int moneyrepaid, int moneydepositednow, int balance, String status) {
		super();
		this.glcid = glcid;
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
		this.coapplicant = coapplicant;
		this.interestpayment = interestpayment;
		this.ornament = ornament;
		this.carat = carat;
		this.netweight = netweight;
		this.totalvalue = totalvalue;
		this.loanamount = loanamount;
		this.moneyrepaid = moneyrepaid;
		this.moneydepositednow = moneydepositednow;
		this.balance = balance;
		this.status = status;
	}
	public int getGlcid() {
		return glcid;
	}
	public void setGlcid(int glcid) {
		this.glcid = glcid;
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
	public String getCoapplicant() {
		return coapplicant;
	}
	public void setCoapplicant(String coapplicant) {
		this.coapplicant = coapplicant;
	}
	public String getInterestpayment() {
		return interestpayment;
	}
	public void setInterestpayment(String interestpayment) {
		this.interestpayment = interestpayment;
	}
	public String getOrnament() {
		return ornament;
	}
	public void setOrnament(String ornament) {
		this.ornament = ornament;
	}
	public String getCarat() {
		return carat;
	}
	public void setCarat(String carat) {
		this.carat = carat;
	}
	public int getNetweight() {
		return netweight;
	}
	public void setNetweight(int netweight) {
		this.netweight = netweight;
	}
	public int getTotalvalue() {
		return totalvalue;
	}
	public void setTotalvalue(int totalvalue) {
		this.totalvalue = totalvalue;
	}
	public int getLoanamount() {
		return loanamount;
	}
	public void setLoanamount(int loanamount) {
		this.loanamount = loanamount;
	}
	public int getMoneyrepaid() {
		return moneyrepaid;
	}
	public void setMoneyrepaid(int moneyrepaid) {
		this.moneyrepaid = moneyrepaid;
	}
	public int getMoneydepositednow() {
		return moneydepositednow;
	}
	public void setMoneydepositednow(int moneydepositednow) {
		this.moneydepositednow = moneydepositednow;
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

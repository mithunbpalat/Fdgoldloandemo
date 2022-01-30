package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.app.model.Admin;
import com.app.service.AdminService;

@RestController
@CrossOrigin("*")
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	/*@Bean
	public BCryptPasswordEncoder encode() {
		return new BCryptPasswordEncoder();
	}
	private BCryptPasswordEncoder passwordEncoder;
	*/
	@PostMapping(value="postadmin")
	public List<Admin> saveAdmin(@RequestBody Admin admin){
		/*String pwd = admin.getPassword();
		String encryptPwd= passwordEncoder.encode(pwd);
		admin.setPassword(encryptPwd);
		System.out.println(encryptPwd);*/
		adminService.saveAdmin(admin);
		return adminService.getAllAdmins();
	}
	@PutMapping(value="updateadmin")
	public List<Admin> updateAdmin(@RequestBody Admin admin){
		/*String pwd = admin.getPassword();
		String encryptPwd= passwordEncoder.encode(pwd);
		admin.setPassword(encryptPwd);
		System.out.println(encryptPwd);*/
		adminService.updateAdmin(admin);
		return adminService.getAllAdmins();
	}
	@GetMapping(value="getalladmins")
	public List<Admin> getAllAdmin(){
		return adminService.getAllAdmins();
	}
	@DeleteMapping(value="deleteadminbyid")
	public List<Admin> deleteAdmin(@RequestParam int aid){
		adminService.deleteAdmin(aid);
		return adminService.getAllAdmins();
	}
	@GetMapping(value="getadminbyid")
	public Admin getAdminById(@RequestParam int aid){
		return adminService.findAdminByAid(aid);
	}
	@GetMapping(value="getadminbyusername")
	public Admin getAdminByUsername(@RequestParam String username){
		/*int status = 0;
		String username= test.getUsername();*/
		return adminService.findAdminByUsername(username);
		/*String adminpwd = admin.getPassword();
		
		String pwd= test.getPassword();
		//String encryptPwd= passwordEncoder.encode(pwd);
		if(adminpwd.equals(pwd)) {
		status = 111;
		}else {
		status = 0;
		}
		return status;*/
	}
}

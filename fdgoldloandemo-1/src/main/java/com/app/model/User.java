package com.app.model;

public class User {
	 	
		private int id;
	  	private String name;
	    private String email;
	    private String mobile;
		public User() {
			super();
			// TODO Auto-generated constructor stub
		}
		public User(int id, String name, String email, String mobile) {
			super();
			this.id = id;
			this.name = name;
			this.email = email;
			this.mobile = mobile;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getMobile() {
			return mobile;
		}
		public void setMobile(String mobile) {
			this.mobile = mobile;
		}
	    
}

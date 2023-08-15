//package com.demo.gaminggears.entity;
//
//import java.util.Date;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "Customer")
//public class Customer {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int custId;
//    private String fname;
//    private String lname;
//    private String mobNumber;
//    private String email;
//    private String pass;
//    private Date birthdate;
//    private int userStatus;
//    private int isExpert;
//
//    @ManyToOne
//    @JoinColumn(name = "addressId")
//    private Address addressId;
//
//    // Constructors
//    public Customer() {
//        // Default constructor
//    }
//
//    public Customer(int custId, String fname, String lname, String mobNumber, String email, String pass,
//                    Date birthdate, int userStatus, int isExpert, Address addressId) {
//        this.custId = custId;
//        this.fname = fname;
//        this.lname = lname;
//        this.mobNumber = mobNumber;
//        this.email = email;
//        this.pass = pass;
//        this.birthdate = birthdate;
//        this.userStatus = userStatus;
//        this.isExpert = isExpert;
//        this.addressId = addressId;
//    }
//
//    // Getters and Setters
//    public int getCustId() {
//        return custId;
//    }
//
//    public void setCustId(int custId) {
//        this.custId = custId;
//    }
//
//    public String getFname() {
//        return fname;
//    }
//
//    public void setFname(String fname) {
//        this.fname = fname;
//    }
//
//    public String getLname() {
//        return lname;
//    }
//
//    public void setLname(String lname) {
//        this.lname = lname;
//    }
//
//    public String getMobNumber() {
//        return mobNumber;
//    }
//
//    public void setMobNumber(String mobNumber) {
//        this.mobNumber = mobNumber;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPass() {
//        return pass;
//    }
//
//    public void setPass(String pass) {
//        this.pass = pass;
//    }
//
//    public Date getBirthdate() {
//        return birthdate;
//    }
//
//    public void setBirthdate(Date birthdate) {
//        this.birthdate = birthdate;
//    }
//
//    public int getUserStatus() {
//        return userStatus;
//    }
//
//    public void setUserStatus(int userStatus) {
//        this.userStatus = userStatus;
//    }
//
//    public int getIsExpert() {
//        return isExpert;
//    }
//
//    public void setIsExpert(int isExpert) {
//        this.isExpert = isExpert;
//    }
//
//    public Address getAddressId() {
//        return addressId;
//    }
//
//    public void setAddressId(Address addressId) {
//        this.addressId = addressId;
//    }
//
//    // toString method
//    @Override
//    public String toString() {
//        return "Customer{" +
//                "custId=" + custId +
//                ", fname='" + fname + '\'' +
//                ", lname='" + lname + '\'' +
//                ", mobNumber='" + mobNumber + '\'' +
//                ", email='" + email + '\'' +
//                ", pass='" + pass + '\'' +
//                ", birthdate=" + birthdate +
//                ", userStatus=" + userStatus +
//                ", isExpert=" + isExpert +
//                ", addressId=" + addressId +
//                '}';
//    }
//}

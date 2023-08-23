package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Distributor")
public class Distributor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "disid")
    private int disid;
    private String disname;
    private String address;
    private String licence;
    private String storename;
    private String mobile;
    private String email;
    private String pass;

    // Constructors
    public Distributor() {
    }

    public Distributor( String disname, String addressId, String licence, String storename, String mobile, String email, String pass) {
        //this.disid = disid;
        this.disname = disname;
        this.address = addressId;
        this.licence = licence;
        this.storename = storename;
        this.mobile = mobile;
        this.email = email;
        this.pass = pass;
    }

    // Getters and Setters
    public int getDisid() {
        return disid;
    }

    public void setDisid(int disid) {
        this.disid = disid;
    }

    public String getDisname() {
        return disname;
    }

    public void setDisname(String disname) {
        this.disname = disname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String addressId) {
        this.address = addressId;
    }

    public String getLicence() {
        return licence;
    }

    public void setLicence(String licence) {
        this.licence = licence;
    }

    public String getStorename() {
        return storename;
    }

    public void setStorename(String storename) {
        this.storename = storename;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    @Override
    public String toString() {
        return "Distributor{" +
                "disid=" + disid +
                ", disname='" + disname + '\'' +
                ", address=" + address +
                ", licence='" + licence + '\'' +
                ", storename='" + storename + '\'' +
                ", mobile='" + mobile + '\'' +
                ", email='" + email + '\'' +
                ", pass='" + pass + '\'' +
                '}';
    }
}

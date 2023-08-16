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

    @ManyToOne
    @JoinColumn(name = "addressid")
    private Address addressId;

    private String licence;
    private String storename;
    private String mobile;
    private String email;

    // Constructors
    public Distributor() {
    }

    public Distributor(int disid, String disname, Address addressId, String licence, String storename, String mobile, String email) {
        this.disid = disid;
        this.disname = disname;
        this.addressId = addressId;
        this.licence = licence;
        this.storename = storename;
        this.mobile = mobile;
        this.email = email;
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

    public Address getAddressId() {
        return addressId;
    }

    public void setAddressId(Address addressId) {
        this.addressId = addressId;
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

    @Override
    public String toString() {
        return "Distributor{" +
                "disid=" + disid +
                ", disname='" + disname + '\'' +
                ", addressId=" + addressId +
                ", licence='" + licence + '\'' +
                ", storename='" + storename + '\'' +
                ", mobile='" + mobile + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

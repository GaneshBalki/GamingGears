package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Address")
public class Address {
    @Id
    @Column(name = "addressid")
    private int addressId;
    
    @ManyToOne
    @JoinColumn(name = "areaid")
    private Area areaId;

    // Constructors
    public Address() {
        // Default constructor
    }

    public Address(int addressId, Area areaId) {
        this.addressId = addressId;
        this.areaId = areaId;
    }

    // Getters and Setters
    public int getAddressId() {
        return addressId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }

    public Area getAreaId() {
        return areaId;
    }

    public void setAreaId(Area areaId) {
        this.areaId = areaId;
    }

    // toString method
    @Override
    public String toString() {
        return "Address{" +
                "addressId=" + addressId +
                ", areaId=" + areaId +
                '}';
    }
}
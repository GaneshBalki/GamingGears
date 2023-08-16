package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Area")
public class Area {
    @Id
    @Column(name = "areaid")
    private int areaId;
    private String areaName;

    @ManyToOne
    private City city; // Replace int cityId with City city

    // Constructors
    public Area() {
        // Default constructor
    }

    public Area(int areaId, String areaName, City city) { // Update constructor parameter
        this.areaId = areaId;
        this.areaName = areaName;
        this.city = city;
    }

    // Getters and Setters
    public int getAreaId() {
        return areaId;
    }

    public void setAreaId(int areaId) {
        this.areaId = areaId;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    // toString method
    @Override
    public String toString() {
        return "Area{" +
                "areaId=" + areaId +
                ", areaName='" + areaName + '\'' +
                ", city=" + city +
                '}';
    }
}

package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "City")
public class City {
	@Id
	@Column(name="cityId")
    private int cityId;
    private String cityName;
    private String state;

    // Constructors
    public City() {
        // Default constructor
    }

    public City(int cityId, String cityName, String state) {
        this.cityId = cityId;
        this.cityName = cityName;
        this.state = state;
    }

    // Getters and Setters
    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    // toString method
    @Override
    public String toString() {
        return "City{" +
                "cityId=" + cityId +
                ", cityName='" + cityName + '\'' +
                ", state='" + state + '\'' +
                '}';
    }
}

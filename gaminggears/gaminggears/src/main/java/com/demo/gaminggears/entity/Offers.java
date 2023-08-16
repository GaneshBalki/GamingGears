package com.demo.gaminggears.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Offers")
public class Offers {
	@Id
	@Column(name = "offerid")
    private int offerid;
    private double discount;
    private int proid;
    private Date validdate;

    // Constructors
    public Offers() {
    }

    public Offers(int offerid, double discount, int proid, Date validdate) {
        this.offerid = offerid;
        this.discount = discount;
        this.proid = proid;
        this.validdate = validdate;
    }

    // Getters and Setters
    public int getOfferid() {
        return offerid;
    }

    public void setOfferid(int offerid) {
        this.offerid = offerid;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public int getProid() {
        return proid;
    }

    public void setProid(int proid) {
        this.proid = proid;
    }

    public Date getValiddate() {
        return validdate;
    }

    public void setValiddate(Date validdate) {
        this.validdate = validdate;
    }

    @Override
    public String toString() {
        return "Offers{" +
                "offerid=" + offerid +
                ", discount=" + discount +
                ", proid=" + proid +
                ", validdate=" + validdate +
                '}';
    }
}

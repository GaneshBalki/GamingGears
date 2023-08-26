package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Productnew")
public class ProductNew {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proid")
    private int proid;
    @Column(name = "proname")
    private String proname;

    @ManyToOne
    @JoinColumn(name = "catid")
    private Category catid;

    @ManyToOne
    @JoinColumn(name = "brandid")
    private Brand brandid;

    
    private double price;
    @Lob
    @Column(name = "image1")
    private byte[] image1;

    @Lob
    @Column(name = "image2")
    private byte[] image2;

    @Lob
    @Column(name = "image3")
    private byte[] image3;

    private String description;

    @ManyToOne
    @JoinColumn(name = "disid")
    private Distributor disid;

	public ProductNew() {
		super();
	}

	public ProductNew(int proid, String proname, Category catid, Brand brandid, double price, byte[] image1,
			byte[] image2, byte[] image3, String description, Distributor disid) {
		super();
		this.proid = proid;
		this.proname = proname;
		this.catid = catid;
		this.brandid = brandid;
		this.price = price;
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.description = description;
		this.disid = disid;
	}

	public int getProid() {
		return proid;
	}

	public void setProid(int proid) {
		this.proid = proid;
	}

	public String getProname() {
		return proname;
	}

	public void setProname(String proname) {
		this.proname = proname;
	}

	public Category getCatid() {
		return catid;
	}

	public void setCatid(Category catid) {
		this.catid = catid;
	}

	public Brand getBrandid() {
		return brandid;
	}

	public void setBrandid(Brand brandid) {
		this.brandid = brandid;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public byte[] getImage1() {
		return image1;
	}

	public void setImage1(byte[] image1) {
		this.image1 = image1;
	}

	public byte[] getImage2() {
		return image2;
	}

	public void setImage2(byte[] image2) {
		this.image2 = image2;
	}

	public byte[] getImage3() {
		return image3;
	}

	public void setImage3(byte[] image3) {
		this.image3 = image3;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Distributor getDisid() {
		return disid;
	}

	public void setDisid(Distributor disid) {
		this.disid = disid;
	}

}

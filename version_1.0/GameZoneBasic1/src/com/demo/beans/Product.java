package com.demo.beans;

public class Product {
	private int pid;
	private int catId;
	private String pname;
	private String shortDisc;
	private String imgurl;
	private int qty;
	private float price;
	public Product() {
		super();
	}
	public Product(int pid,int catId, String pname, String shortDisc, String imgurl, int qty, float price) {
		super();
		this.pid = pid;
		this.catId=catId;
		this.pname = pname;
		this.shortDisc = shortDisc;
		this.imgurl = imgurl;
		this.qty = qty;
		this.price = price;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public int getCatId() {
		return catId;
	}
	public void setCatId(int catId) {
		this.catId = catId;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getShortDisc() {
		return shortDisc;
	}
	public void setShortDisc(String shortDisc) {
		this.shortDisc = shortDisc;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Product [pid=" + pid + ", pname=" + pname + ", shortDisc=" + shortDisc + ", imgUrl=" + imgurl + ", qty="
				+ qty + ", price=" + price + "]";
	}
	
	
}

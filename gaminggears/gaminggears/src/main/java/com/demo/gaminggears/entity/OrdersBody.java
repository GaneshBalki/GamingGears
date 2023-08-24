package com.demo.gaminggears.entity;

public class OrdersBody {
	private int custid;
	private int proid;
	private int price;
	private int status;
	public OrdersBody() {
		super();
	}
	public OrdersBody(int custid, int proid, int price, int status) {
		super();
		this.custid = custid;
		this.proid = proid;
		this.price = price;
		this.status = status;
	}
	public int getCustid() {
		return custid;
	}
	public void setCustid(int custid) {
		this.custid = custid;
	}
	public int getProid() {
		return proid;
	}
	public void setProid(int proid) {
		this.proid = proid;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "OrdersBody [custid=" + custid + ", proid=" + proid + ", price=" + price + ", status=" + status + "]";
	}
	
	
}

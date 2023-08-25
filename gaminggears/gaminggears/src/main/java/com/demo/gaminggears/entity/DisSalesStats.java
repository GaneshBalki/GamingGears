package com.demo.gaminggears.entity;

public class DisSalesStats {
	private int proid;
	private String proname;
	private int qtysold;
	private int sales;
	public DisSalesStats() {
		super();
	}
	public DisSalesStats(int proid, String proname,int qtysold, int sales) {
		super();
		this.proid = proid;
		this.proname = proname;
		this.qtysold = qtysold;
		this.sales = sales;
	}
	public int getProid() {
		return proid;
	}
	public int getQtysold() {
		return qtysold;
	}
	public void setQtysold(int qtysold) {
		this.qtysold = qtysold;
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
	public int getSales() {
		return sales;
	}
	public void setSales(int sales) {
		this.sales = sales;
	}
	@Override
	public String toString() {
		return "DisSalesStats [proid=" + proid + ", proname=" + proname + ", sales=" + sales + "]";
	}
	
}

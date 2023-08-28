package com.demo.gaminggears.entity;

import java.math.BigDecimal;

import javax.persistence.SqlResultSetMapping;
import javax.persistence.EntityResult;
import javax.persistence.FieldResult;
import javax.persistence.NamedNativeQuery;


//@NamedNativeQuery(
//    name = "SalesStatisticsDTO.findSalesStatisticsByDistributorId",
//    query = "SELECT o.proid as proid, p.proname as proname, count(o.proid) as qtysold, SUM(o.price) AS sales " +
//            "FROM Orders o " +
//            "JOIN Product p ON o.proid = p.proid " +
//            "JOIN Distributor d ON p.disid = d.disid " +
//            "WHERE d.disid = :disid " +
//            "GROUP BY o.proid",
//    resultSetMapping = "Mapp"
//)
//@SqlResultSetMapping(
//    name = "Mapp",
//    entities = @EntityResult(
//        entityClass = SalesStatisticsDTO.class,
//        fields = {
//            @FieldResult(name = "proid", column = "proid"),
//            @FieldResult(name = "proname", column = "proname"),
//            @FieldResult(name = "qtysold", column = "qtysold"),
//            @FieldResult(name = "sales", column = "sales")
//        }
//    )
//)
public class SalesStatisticsDTO {
	private int proid;
    private String proname;
    private long qtysold;
    private double sales;
	public SalesStatisticsDTO(int proid, String proname, long qtysold, double sales) {
		super();
		this.proid = proid;
		this.proname = proname;
		this.qtysold = qtysold;
		this.sales = sales;
	}
	public SalesStatisticsDTO() {
		super();
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
	public long getQtysold() {
		return qtysold;
	}
	public void setQtysold(long qtysold) {
		this.qtysold = qtysold;
	}
	public double getSales() {
		return sales;
	}
	public void setSales(double sales) {
		this.sales = sales;
	}
	@Override
	public String toString() {
		return "SalesStatisticsDTO [proid=" + proid + ", proname=" + proname + ", qtysold=" + qtysold + ", sales="
				+ sales + "]";
	}


}

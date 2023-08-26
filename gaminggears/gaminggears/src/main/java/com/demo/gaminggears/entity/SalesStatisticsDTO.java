package com.demo.gaminggears.entity;

import java.math.BigDecimal;

import javax.persistence.SqlResultSetMapping;
import javax.persistence.EntityResult;
import javax.persistence.FieldResult;

@SqlResultSetMapping(name = "Mapp", entities = { @EntityResult(entityClass = SalesStatisticsDTO.class, fields = {
		@FieldResult(name = "proid", column = "proid"), @FieldResult(name = "proname", column = "proname"),
		@FieldResult(name = "qtysold", column = "qtysold"), @FieldResult(name = "sales", column = "sales") }) })
public class SalesStatisticsDTO {
	private Long proid;
	private String proname;
	private Long qtysold;
	private BigDecimal sales;

	public SalesStatisticsDTO(Long proid, String proname, Long qtysold, BigDecimal sales) {
		super();
		this.proid = proid;
		this.proname = proname;
		this.qtysold = qtysold;
		this.sales = sales;
	}

	public SalesStatisticsDTO() {
		super();
	}

	public Long getProid() {
		return proid;
	}

	public void setProid(Long proid) {
		this.proid = proid;
	}

	public String getProname() {
		return proname;
	}

	public void setProname(String proname) {
		this.proname = proname;
	}

	public Long getQtysold() {
		return qtysold;
	}

	public void setQtysold(Long qtysold) {
		this.qtysold = qtysold;
	}

	public BigDecimal getSales() {
		return sales;
	}

	public void setSales(BigDecimal sales) {
		this.sales = sales;
	}

}

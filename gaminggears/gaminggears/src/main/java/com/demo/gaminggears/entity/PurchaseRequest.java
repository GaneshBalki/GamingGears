package com.demo.gaminggears.entity;

import java.util.List;

public class PurchaseRequest {
    private Long custId;
    private List<Long> productIds;
    private double totalprice;
	public Long getCustId() {
		return custId;
	}
	public void setCustId(Long custId) {
		this.custId = custId;
	}
	public List<Long> getProductIds() {
		return productIds;
	}
	public void setProductIds(List<Long> productIds) {
		this.productIds = productIds;
	}
	public double getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(double totalprice) {
		this.totalprice = totalprice;
	}
	public PurchaseRequest(Long custId, List<Long> productIds, double totalprice) {
		super();
		this.custId = custId;
		this.productIds = productIds;
		this.totalprice = totalprice;
	}
	public PurchaseRequest() {
		super();
	}

    // Getters and setters
    
}


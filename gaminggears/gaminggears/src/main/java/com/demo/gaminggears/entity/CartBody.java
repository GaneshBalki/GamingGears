package com.demo.gaminggears.entity;

public class CartBody {
    private int custId;
    private int proid;

    public CartBody() {
        // Default constructor
    }

    public CartBody(int custId, int proid) {
        this.custId = custId;
        this.proid = proid;
    }

    public int getCustId() {
        return custId;
    }

    public void setCustId(int custId) {
        this.custId = custId;
    }

    public int getProid() {
        return proid;
    }

    public void setProid(int proid) {
        this.proid = proid;
    }

    @Override
    public String toString() {
        return "CartBody{" +
                "custId=" + custId +
                ", proid=" + proid +
                '}';
    }
}

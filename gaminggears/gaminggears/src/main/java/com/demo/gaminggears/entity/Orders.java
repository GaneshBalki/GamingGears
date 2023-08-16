package com.demo.gaminggears.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Orders")
public class Orders {
    @Id
    @Column(name = "orderid")
    private int orderid;
    
    @ManyToOne
    @JoinColumn(name = "custid")
    private Customer custid;
    
    @ManyToOne
    @JoinColumn(name = "proid")
    private Product proid;
    
    private Date odate;
    private int status;
    private String paymentmode;
    private double amount;
    private int transactionid;

    // Constructors
    public Orders() {
    }

    public Orders(int orderid, Customer custid, Product proid, Date odate, int status, String paymentmode, double amount, int transactionid) {
        this.orderid = orderid;
        this.custid = custid;
        this.proid = proid;
        this.odate = odate;
        this.status = status;
        this.paymentmode = paymentmode;
        this.amount = amount;
        this.transactionid = transactionid;
    }

    // Getters and Setters
    public int getOrderid() {
        return orderid;
    }

    public void setOrderid(int orderid) {
        this.orderid = orderid;
    }

    public Customer getCustid() {
        return custid;
    }

    public void setCustid(Customer custid) {
        this.custid = custid;
    }

    public Product getProid() {
        return proid;
    }

    public void setProid(Product proid) {
        this.proid = proid;
    }

    public Date getOdate() {
        return odate;
    }

    public void setOdate(Date odate) {
        this.odate = odate;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getPaymentmode() {
        return paymentmode;
    }

    public void setPaymentmode(String paymentmode) {
        this.paymentmode = paymentmode;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public int getTransactionid() {
        return transactionid;
    }

    public void setTransactionid(int transactionid) {
        this.transactionid = transactionid;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "orderid=" + orderid +
                ", custid=" + custid +
                ", proid=" + proid +
                ", odate=" + odate +
                ", status=" + status +
                ", paymentmode='" + paymentmode + '\'' +
                ", amount=" + amount +
                ", transactionid=" + transactionid +
                '}';
    }
}

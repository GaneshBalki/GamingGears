//package com.demo.gaminggears.entity;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "Cart")
//public class Cart {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int cartid;
//
//    @ManyToOne
//    @JoinColumn(name = "custId")
//    private Customer custId;
//
//    @ManyToOne
//    @JoinColumn(name = "proId")
//    private Product proId;
//
//    private int qty;
//    private double price;
//
//    // Constructors
//    public Cart() {
//    }
//
//    public Cart(int cartid, Customer custId, Product proId, int qty, double price) {
//        this.cartid = cartid;
//        this.custId = custId;
//        this.proId = proId;
//        this.qty = qty;
//        this.price = price;
//    }
//
//    // Getters and Setters
//    public int getCartid() {
//        return cartid;
//    }
//
//    public void setCartid(int cartid) {
//        this.cartid = cartid;
//    }
//
//    public Customer getCustId() {
//        return custId;
//    }
//
//    public void setCustId(Customer custId) {
//        this.custId = custId;
//    }
//
//    public Product getProId() {
//        return proId;
//    }
//
//    public void setProId(Product proId) {
//        this.proId = proId;
//    }
//
//    public int getQty() {
//        return qty;
//    }
//
//    public void setQty(int qty) {
//        this.qty = qty;
//    }
//
//    public double getPrice() {
//        return price;
//    }
//
//    public void setPrice(double price) {
//        this.price = price;
//    }
//
//    @Override
//    public String toString() {
//        return "Cart{" +
//                "cartid=" + cartid +
//                ", custId=" + custId +
//                ", proId=" + proId +
//                ", qty=" + qty +
//                ", price=" + price +
//                '}';
//    }
//}
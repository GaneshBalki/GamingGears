//package com.demo.gaminggears.entity;
//
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "AskExpert")
//public class AskExpert {
//    @Id
//    private int queId;
//
//    @ManyToOne
//    @JoinColumn(name = "custId")
//    private Customer custId;
//
//    @ManyToOne
//    @JoinColumn(name = "expId")
//    private Expert expId;
//
//    private String que;
//    private int status;
//    private String resolution;
//
//    // Constructors
//    public AskExpert() {
//        // Default constructor
//    }
//
//    public AskExpert(int queId, Customer custId, Expert expId, String que, int status, String resolution) {
//        this.queId = queId;
//        this.custId = custId;
//        this.expId = expId;
//        this.que = que;
//        this.status = status;
//        this.resolution = resolution;
//    }
//
//    // Getters and Setters
//    public int getQueId() {
//        return queId;
//    }
//
//    public void setQueId(int queId) {
//        this.queId = queId;
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
//    public Expert getExpId() {
//        return expId;
//    }
//
//    public void setExpId(Expert expId) {
//        this.expId = expId;
//    }
//
//    public String getQue() {
//        return que;
//    }
//
//    public void setQue(String que) {
//        this.que = que;
//    }
//
//    public int getStatus() {
//        return status;
//    }
//
//    public void setStatus(int status) {
//        this.status = status;
//    }
//
//    public String getResolution() {
//        return resolution;
//    }
//
//    public void setResolution(String resolution) {
//        this.resolution = resolution;
//    }
//
//    // toString method
//    @Override
//    public String toString() {
//        return "AskExpert{" +
//                "queId=" + queId +
//                ", custId=" + custId +
//                ", expId=" + expId +
//                ", que='" + que + '\'' +
//                ", status=" + status +
//                ", resolution='" + resolution + '\'' +
//                '}';
//    }
//}

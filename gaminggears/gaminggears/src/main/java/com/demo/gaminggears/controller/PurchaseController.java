package com.demo.gaminggears.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.gaminggears.entity.PurchaseRequest;
import com.demo.gaminggears.service.PurchaseService;

@RestController
public class PurchaseController {

    @Autowired
    private PurchaseService purchaseService;

//    @PostMapping("/products/purchase/cart")
//    public ResponseEntity<String> handleBuyNow(@RequestBody PurchaseRequest request) {
//        try {
//            purchaseService.processPurchase(request);
//            return ResponseEntity.ok("Purchase successful");
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Error processing purchase");
//        }
//    }
}


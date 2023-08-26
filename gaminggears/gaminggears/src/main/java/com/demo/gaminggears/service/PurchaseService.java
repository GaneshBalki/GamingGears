package com.demo.gaminggears.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Purchase;
import com.demo.gaminggears.entity.PurchaseRequest;
import com.demo.gaminggears.repository.PurchaseRepository;

@Service
public class PurchaseService {

    @Autowired
    private PurchaseRepository purchaseRepository;

    public void processPurchase(PurchaseRequest request) {
        Purchase purchase = new Purchase();
        purchase.setCustId(request.getCustId());
        purchase.setProductIds(request.getProductIds());
        purchase.setTotalprice(request.getTotalprice());

        // You might want to perform additional validation and business logic here
        // For example, checking if the products are available, calculating totals, etc.

        // Save the purchase entity to the database
        purchaseRepository.save(purchase);

        // You can add more logic here based on your requirements
    }
}


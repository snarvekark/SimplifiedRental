package edu.sjsu.esp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.sjsu.esp.model.WorkOrder;
import edu.sjsu.esp.service.WorkOrderService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class AppController {
	
    @Autowired
    WorkOrderService woService;
    
    @GetMapping("/getWorkOrders")
    public List<WorkOrder> getWorkOrders(){
    	return woService.getWorkOrderService();
    }
}

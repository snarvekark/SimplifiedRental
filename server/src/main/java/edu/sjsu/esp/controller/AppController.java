package edu.sjsu.esp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.sjsu.esp.model.Technician;
import edu.sjsu.esp.model.WorkOrder;
import edu.sjsu.esp.service.AppService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class AppController {
	
    @Autowired
    AppService appService;
    
    @GetMapping("/getWorkOrders")
    public List<WorkOrder> getWorkOrders(){
    	return appService.getWorkOrderService();
    }
    
    @GetMapping("/getCustomerOrders/{userEmail}")
    public List<WorkOrder> getCustOrders(@PathVariable String userEmail){
    	return appService.getCustOrderService(userEmail);
    }
    
    @GetMapping("/getTechnicianOrders/{techEmail}")
    public List<WorkOrder> getTechnicianOrders(@PathVariable String techEmail){
    	return appService.getTechnicianOrderService(techEmail);
    }
    
    @PostMapping("/createWorkOrder")
    public WorkOrder createWorkOrder(@RequestBody WorkOrder newWorkOrder) {
    	return appService.createWorkOrderService(newWorkOrder);
    }
    
    @PutMapping("/updateWorkOrder/{id}")
    public WorkOrder updateWorkOrder(@RequestBody WorkOrder newWorkOrder, @PathVariable Integer id) {
    	return appService.updateWorkOrderService(newWorkOrder, id);
    }
    
    @PutMapping("/updateStatusWorkOrder/{id}")
    public WorkOrder updateStatusWorkOrder(@RequestBody WorkOrder newWorkOrder, @PathVariable Integer id) {
    	return appService.updateStatusWorkOrderService(newWorkOrder, id);
    }
    
    @GetMapping("/getTechnicians")
    public List<Technician> getTechnicians(){
    	return appService.getTechnicianService();
    }
    
    @GetMapping("/getAssignedWorkOrders")
    public List<WorkOrder> getAssignedWorkOrders(){
    	return appService.getAssignedWorkOrderService();
    }
}

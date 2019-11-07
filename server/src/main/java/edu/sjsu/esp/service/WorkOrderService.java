package edu.sjsu.esp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.sjsu.esp.dao.WorkOrderDAO;
import edu.sjsu.esp.model.WorkOrder;

@Service
public class WorkOrderService {
	 @Autowired
	 private WorkOrderDAO woRepository;
	 
	 public List<WorkOrder> getWorkOrderService(){
		return woRepository.listWorkOrdersQuery();
	 }
}

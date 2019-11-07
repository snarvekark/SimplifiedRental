package edu.sjsu.esp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.sjsu.esp.model.WorkOrder;


public interface WorkOrderDAO extends JpaRepository<WorkOrder, Integer> {
	
	@Query(
		  value = "SELECT * FROM WORKORDER", 
		  nativeQuery = true)
	List<WorkOrder> listWorkOrdersQuery();
}

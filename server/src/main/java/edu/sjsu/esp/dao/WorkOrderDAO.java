package edu.sjsu.esp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.sjsu.esp.model.WorkOrder;

public interface WorkOrderDAO extends JpaRepository<WorkOrder, Integer> {

	@Query(value = "SELECT * FROM WORKORDER WHERE STATUS!= 'COMPLETED' AND TECHNICIAN_MAIL IS NULL", nativeQuery = true)
	List<WorkOrder> listWorkOrdersQuery();
	
	@Query(value = "SELECT * FROM WORKORDER WHERE STATUS!= 'COMPLETED' AND TECHNICIAN_MAIL IS NOT NULL", nativeQuery = true)
	List<WorkOrder> listAssignedWorkOrdersQuery();

	@Query(value = "SELECT * FROM WORKORDER WHERE STATUS!= 'COMPLETED' AND USER_EMAIL = ?1", nativeQuery = true)
	List<WorkOrder> listCustOrdersQuery(String userEmail);

	@Query(value = "SELECT * FROM workorder WHERE STATUS = 'PENDING' AND TECHNICIAN_MAIL = ?1", nativeQuery = true)
	List<WorkOrder> listTechnicianOrdersQuery(String techEmail);
	
	@Query(value = "SELECT * FROM workorder WHERE STATUS = 'IN PROGRESS' AND TECHNICIAN_MAIL = ?1", nativeQuery = true)
	List<WorkOrder> listInProgressOrdersQuery(String techEmail);
}

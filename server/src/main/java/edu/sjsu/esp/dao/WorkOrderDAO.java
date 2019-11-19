package edu.sjsu.esp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.sjsu.esp.model.WorkOrder;

public interface WorkOrderDAO extends JpaRepository<WorkOrder, Integer> {

	@Query(value = "SELECT * FROM WORKORDER WHERE STATUS!= 'COMPLETED'", nativeQuery = true)
	List<WorkOrder> listWorkOrdersQuery();

	@Query(value = "SELECT * FROM WORKORDER WHERE STATUS!= 'COMPLETED' AND USER_ID = ?1", nativeQuery = true)
	List<WorkOrder> listCustOrdersQuery(Integer userid);

	@Query(value = "SELECT * FROM workorder WHERE STATUS!= 'COMPLETED' AND TECHNICIAN_ID = ?1", nativeQuery = true)
	List<WorkOrder> listTechnicianOrdersQuery(Integer techId);
}

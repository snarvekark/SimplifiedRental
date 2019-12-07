package edu.sjsu.esp.controller;

import static org.mockito.Mockito.when;

import org.junit.Assert;
import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import edu.sjsu.esp.model.Technician;
import edu.sjsu.esp.model.WorkOrder;
import edu.sjsu.esp.service.AppService;

public class AppControllerTest {

	@InjectMocks
	private AppController appController;

	@Mock
	private AppService appService;

	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void getWorkOrdersTest() {
		List<WorkOrder> list = new ArrayList<>();
		WorkOrder workOrder = new WorkOrder();
		workOrder.setId(1);
		list.add(workOrder);
		when(appService.getWorkOrderService()).thenReturn(list);
		Assert.assertEquals(appController.getWorkOrders(), list);
	}

	@Test
	public void getCustOrdersTest() {
		List<WorkOrder> list = new ArrayList<>();
		WorkOrder workOrder = new WorkOrder();
		workOrder.setId(1);
		workOrder.setUserEmail("abc@sjsu.edu");
		list.add(workOrder);
		WorkOrder workOrder2 = new WorkOrder();
		workOrder2.setId(2);
		workOrder2.setUserEmail("abc@sjsu.edu");
		list.add(workOrder2);
		when(appService.getCustOrderService("abc@sjsu.edu")).thenReturn(list);
		Assert.assertEquals(appController.getCustOrders("abc@sjsu.edu"), list);
	}

	@Test
	public void getTechnicianOrdersTest() {
		List<WorkOrder> list = new ArrayList<>();
		WorkOrder workOrder = new WorkOrder();
		workOrder.setId(1);
		Technician t = new Technician();
		t.setId(1);
		t.setEmail("tech@sjsu.edu");
		workOrder.setTechnician(t);
		list.add(workOrder);
		when(appService.getTechnicianOrderService("tech@sjsu.edu")).thenReturn(list);
		Assert.assertEquals(appController.getTechnicianOrders("tech@sjsu.edu"), list);
	}

	@Test
	public void getTechniciansTest() {
		List<Technician> list = new ArrayList<>();
		Technician t1 = new Technician();
		t1.setId(1);
		list.add(t1);
		Technician t2 = new Technician();
		t2.setId(2);
		list.add(t2);
		when(appService.getTechnicianService()).thenReturn(list);
		Assert.assertEquals(appController.getTechnicians(), list);
	}
	
	@Test
	public void createWorkOrderTest() {
		WorkOrder wo = new WorkOrder();
		wo.setDescription("WorkOrder Test");
		wo.setPriority("HIGH");
		wo.setStatus("PENDING");
		wo.setId(6);
		when(appService.createWorkOrderService(wo)).thenReturn(wo);
		Assert.assertEquals(appController.createWorkOrder(wo).getDescription(),wo.getDescription());
	}
	
	@Test
	public void updateWorkOrderTest() {
		WorkOrder workOrder = new WorkOrder();
		workOrder.setId(1);
		workOrder.setDescription("WorkOrder test");
		Technician t1= new Technician();
		t1.setId(1);
		t1.setFirstName("John");
		workOrder.setTechnician(t1);
	    when(appService.updateWorkOrderService(workOrder, 1)).thenReturn(workOrder);
	    Assert.assertEquals(appController.updateWorkOrder(workOrder, 1).getTechnician(),workOrder.getTechnician());
	}
	
	@Test
	public void updateStatusWorkOrderTest() {
		WorkOrder workOrder = new WorkOrder();
		workOrder.setId(1);
		workOrder.setDescription("WorkOrder test");
		workOrder.setStatus("PENDING");
	    when(appService.updateStatusWorkOrderService(workOrder, 1)).thenReturn(workOrder);
	    Assert.assertEquals(appController.updateStatusWorkOrder(workOrder, 1).getStatus(),workOrder.getStatus());
	}
}

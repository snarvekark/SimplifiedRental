package edu.sjsu.esp.controller;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
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
		workOrder.setUserid(1);
		list.add(workOrder);
		WorkOrder workOrder2 = new WorkOrder();
		workOrder2.setId(2);
		workOrder2.setUserid(1);
		list.add(workOrder2);
		when(appService.getCustOrderService(1)).thenReturn(list);
		Assert.assertEquals(appController.getCustOrders(1), list);
	}

	@Test
	public void getTechnicianOrdersTest() {
		List<WorkOrder> list = new ArrayList<>();
		WorkOrder workOrder = new WorkOrder();
		workOrder.setId(1);
		Technician t = new Technician();
		t.setId(1);
		workOrder.setTechnician(t);
		list.add(workOrder);
		when(appService.getTechnicianOrderService(1)).thenReturn(list);
		Assert.assertEquals(appController.getTechnicianOrders(1), list);
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
}

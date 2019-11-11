package edu.sjsu.esp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "workorder")
public class WorkOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String description;
	private String status;
	private String priority;
	
	@Column(name="apt_no")
	private String aptNum;
	
	@Column(name="start_date", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date startDate;
	
	@Column(name="end_date", columnDefinition="DATETIME")
	@Temporal(TemporalType.TIMESTAMP)
	private Date endDate;
	
	@Column(name="user_id")
	private int userId;

	public int getUserid() {
		return userId;
	}

	public void setUserid(int userid) {
		this.userId = userid;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getAptNum() {
		return aptNum;
	}

	public void setAptNum(String aptNum) {
		this.aptNum = aptNum;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	
	
}

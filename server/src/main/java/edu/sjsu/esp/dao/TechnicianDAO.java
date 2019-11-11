package edu.sjsu.esp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.sjsu.esp.model.Technician;

public interface TechnicianDAO extends JpaRepository<Technician, Integer> {
}

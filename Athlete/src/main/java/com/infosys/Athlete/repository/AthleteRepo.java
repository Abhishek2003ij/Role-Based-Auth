package com.infosys.Athlete.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infosys.Athlete.entity.Athlete;

public interface AthleteRepo extends JpaRepository<Athlete, Long> {
    // You can add custom query methods here if needed
}
 

package com.infosys.Athlete.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infosys.Athlete.entity.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
    // Custom query methods can be added if necessary
}



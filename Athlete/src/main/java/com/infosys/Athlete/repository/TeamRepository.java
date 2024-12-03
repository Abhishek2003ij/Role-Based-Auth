package com.infosys.Athlete.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infosys.Athlete.entity.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {
    // Custom query methods can be added if necessary
}

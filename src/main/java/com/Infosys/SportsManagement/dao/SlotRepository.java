package com.Infosys.SportsManagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Infosys.SportsManagement.Entity.Slot;

public interface SlotRepository extends JpaRepository<Slot, Long> {
    @Query("select max(slotId) from Slot")
    public Long findLastSlotId();
  }

package com.Infosys.SportsManagement.dao;

import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.Infosys.SportsManagement.Entity.SlotItem;
import com.Infosys.SportsManagement.Entity.SlotItemEmbed;

@Service
@Repository
public class SlotItemDaoImpl implements SlotItemDao{
	@Autowired
	private SlotItemRepository repository;
	@PersistenceContext
    private EntityManager entityManager;
	@Override
	public void save(SlotItem slotItem)
	{
		repository.save(slotItem);
	}
	@Override
	public Integer findSeatBookedById(SlotItemEmbed id) {
		return repository.findSeatBookedById(id);
	}
	@Override
	public Set<SlotItemEmbed> findAllEmbeds() {
		return repository.findAllEmbeds();
	}
	@Override
	public SlotItem findById(SlotItemEmbed embed) {
		// TODO Auto-generated method stub
		return entityManager.find(SlotItem.class, embed);
	}
	@Override
	public List<SlotItem> displayEmptySlots() {
		// TODO Auto-generated method stub
		return repository.displayEmptySlots();
	}
	@Override
	public List<SlotItem> displayBookedSlots() {
		// TODO Auto-generated method stub
		return repository.displayBookedSlots();
	}
}
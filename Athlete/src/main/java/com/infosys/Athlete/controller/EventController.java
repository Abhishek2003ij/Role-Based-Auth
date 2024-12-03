package com.infosys.Athlete.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.Athlete.Service.EventService;
import com.infosys.Athlete.entity.Event;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    // Create a new event
    @PostMapping("/create")
    public Event createEvent(@RequestParam String name, @RequestParam LocalDate date,
                             @RequestParam String location, @RequestParam String description) {
        return eventService.createEvent(name, date, location, description);
    }

    // Get all events
    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    // Get an event by ID
    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        return eventService.getEventById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id: " + id));
    }

    // Update an event
    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestParam String name, @RequestParam LocalDate date,
                             @RequestParam String location, @RequestParam String description) {
        Event existingEvent = eventService.getEventById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id: " + id));
        existingEvent.setName(name);
        existingEvent.setDate(date);
        existingEvent.setLocation(location);
        existingEvent.setDescription(description);
        return eventService.updateEvent(existingEvent);
    }

    // Delete an event
    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
    }
}

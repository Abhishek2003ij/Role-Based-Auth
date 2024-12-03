package com.infosys.Athlete.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.infosys.Athlete.entity.Event;

public interface EventService {
    List<Event> getAllEvents();
    Event saveEvent(Event event);
    Event updateEvent(Event event);
    Optional<Event> getEventById(Long id);
    void deleteEvent(Long id);

    // Add the createEvent method
    Event createEvent(String name, LocalDate date, String location, String description);
}

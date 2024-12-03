package com.infosys.Athlete.Service.implement;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.Athlete.Service.EventService;
import com.infosys.Athlete.entity.Event;
import com.infosys.Athlete.repository.EventRepository;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public Event updateEvent(Event event) {
        if (eventRepository.existsById(event.getId())) {
            return eventRepository.save(event);
        } else {
            throw new RuntimeException("Event not found with id: " + event.getId());
        }
    }

    @Override
    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    @Override
    public void deleteEvent(Long id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
        } else {
            throw new RuntimeException("Event not found with id: " + id);
        }
    }

    @Override
    public Event createEvent(String name, LocalDate date, String location, String description) {
        Event event = new Event();
        event.setName(name);
        event.setDate(date);
        event.setLocation(location);
        event.setDescription(description);
        return eventRepository.save(event);
    }
}

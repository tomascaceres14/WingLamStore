package com.winglam.app.service;

import com.winglam.app.entity.model.Event;
import com.winglam.app.entity.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private EventRepository repository;

    public EventService(EventRepository repository) {
        this.repository = repository;
    }

    public Event save(Event event) {
        return repository.save(event);
    }

    public Event findById(String id){
        return repository.findById(id).orElse(null);
    }

    public List<Event> findAll(){
        return repository.findAll();
    }
}
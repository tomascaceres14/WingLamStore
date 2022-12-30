package com.winglam.app.controller;

import com.winglam.app.entity.model.Event;
import com.winglam.app.service.tools.EmailSenderService;
import com.winglam.app.service.EventService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/event")
public class EventController {

    EventService service;
    EmailSenderService emailService;
    public EventController(EventService service, EmailSenderService emailService) {
        this.service = service;
        this.emailService = emailService;
    }

    @GetMapping()
    public ResponseEntity<List<Event>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> findById(@PathVariable String id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping()
    public ResponseEntity<Event> save(@RequestBody Event event){
        return ResponseEntity.ok(service.save(event));
    }
}

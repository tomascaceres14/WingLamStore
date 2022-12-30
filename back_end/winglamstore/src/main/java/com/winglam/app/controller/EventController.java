package com.winglam.app.controller;

import com.winglam.app.entity.model.Event;
import com.winglam.app.service.EmailSenderService;
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

    public String emailBody(String email, String nameLastname, List<String> products){
        String presentation =
                "Ha ingresado un nuevo pedido:\n\n" +
                        "Datos del cliente:\n" +
                        "  Nombre y Apellido: " + nameLastname + "\n" +
                        "  Correo electronico: " + email + "\n\n";

        String productList = "Pedido:\n";

        for (String p :
                products) {
            productList+= "  ~ " + p + "\n";
            System.out.println(productList);
        }

        return presentation + productList;
    }

    @GetMapping()
    public ResponseEntity<List<Event>> getAll(){
        List<String> order = new ArrayList<>();
        order.add("Remera Wing Lam Kung Fu");
        order.add("Espada plateada ninja");
        order.add("Bombo chino");
        order.add("Sahumerios");
        emailService.sendEmail("tomialegriacaceres@gmail.com", "Email de prueba", emailBody("tomialegriacaceres@gmail.com", "Tomas Alegria Caceres", order));
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

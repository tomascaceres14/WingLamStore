package com.winglam.app.controller;

import com.winglam.app.service.tools.EmailSenderService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/email")
public class EmailsController {

    EmailSenderService emailService;

    public EmailsController(EmailSenderService emailService) {
        this.emailService = emailService;
    }

    @GetMapping("/order")
    public String newProductOrder(String email, String nameLastname, List<String> products){
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
        emailService.sendEmail("tomialegriacaceres@gmail.com", "Nuevo pedido online", presentation + productList);
        return "Su pedido se ha enviado con exito. Se le confirmara via E-mail cuando esté listo";
    }



}

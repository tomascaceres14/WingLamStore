package com.winglam.app.controller;

import com.winglam.app.controller.dto.ProductOrderDTO;
import com.winglam.app.service.tools.EmailSenderService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/notifications")
public class EmailController {

    EmailSenderService emailService;

    public EmailController(EmailSenderService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/productorders")
    public String newProductOrder(@RequestBody ProductOrderDTO order){
        String presentation =
                "Ha ingresado un nuevo pedido:\n\n" +
                        "Datos del cliente:\n" +
                        "  Nombre y Apellido: " + order.getNameLastname() + "\n" +
                        "  Correo electronico: " + order.getEmail() + "\n\n";
        String productList = "Pedido:\n";
        for (String p :
                order.getProducts()) {
            productList+= "  ~ " + p + "\n";
            System.out.println(productList);
        }
        emailService.sendEmail("tomialegriacaceres@gmail.com", "Nuevo pedido online", presentation + productList);
        return "Su pedido se ha enviado con éxito. Se le confirmará vía E-mail cuando esté listo";
    }
}

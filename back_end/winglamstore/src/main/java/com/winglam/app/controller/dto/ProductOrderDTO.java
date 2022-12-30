package com.winglam.app.controller.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class ProductOrderDTO {
    private String email;
    private String nameLastname;
    private List<String> products;
}

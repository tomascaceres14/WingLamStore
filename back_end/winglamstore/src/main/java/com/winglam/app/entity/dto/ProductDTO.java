package com.winglam.app.entity.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class ProductDTO {

    private String name;

    private Integer price;

    private String imgUrl;
}

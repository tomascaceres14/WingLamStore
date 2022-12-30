package com.winglam.app.entity.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serial;
import java.io.Serializable;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Data
@Document(collection = "Event")
public class Event implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    private String eventId;

    private String title;

    private String description;

    private String img;

    private Integer capacity;

    private Integer price;

    private Date fromDate;

    private Date toDate;

}

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
@Document(collection = "Course")
public class Course implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    private String courseId;

    private String title;

    private String description;

    private String img;

    private Integer capacity;

    private Date fromDate;

    private Date toDate;

}

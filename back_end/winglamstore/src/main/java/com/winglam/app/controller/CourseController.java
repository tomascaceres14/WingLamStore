package com.winglam.app.controller;

import com.winglam.app.entity.model.Course;
import com.winglam.app.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/course")
public class CourseController {

    CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }

    @GetMapping()
    public ResponseEntity<List<Course>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping()
    public ResponseEntity<Course> save(@RequestBody Course course){
        return ResponseEntity.ok(service.save(course));
    }
}

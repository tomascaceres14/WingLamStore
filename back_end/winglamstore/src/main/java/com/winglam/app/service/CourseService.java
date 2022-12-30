package com.winglam.app.service;

import com.winglam.app.entity.model.Course;
import com.winglam.app.entity.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private CourseRepository repository;

    public CourseService(CourseRepository repository) {
        this.repository = repository;
    }

    public Course save(Course course) {
        return repository.save(course);
    }

    public Course findById(String id){
        return repository.findById(id).orElse(null);
    }

    public List<Course> findAll(){
        return repository.findAll();
    }
}
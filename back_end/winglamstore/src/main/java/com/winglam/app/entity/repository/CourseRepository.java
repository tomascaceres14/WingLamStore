package com.winglam.app.entity.repository;

import com.winglam.app.entity.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends MongoRepository<Course, String> {
}

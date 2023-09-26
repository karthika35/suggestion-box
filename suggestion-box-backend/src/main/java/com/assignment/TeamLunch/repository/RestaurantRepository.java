package com.assignment.TeamLunch.repository;

import com.assignment.TeamLunch.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    @Query(value = "SELECT * FROM restaurants ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Restaurant getRandomRestaurant();
}

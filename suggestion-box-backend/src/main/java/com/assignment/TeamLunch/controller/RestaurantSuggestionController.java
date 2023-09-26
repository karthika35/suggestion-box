package com.assignment.TeamLunch.controller;

import com.assignment.TeamLunch.model.Restaurant;
import com.assignment.TeamLunch.service.RestaurantSuggestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/restaurant")
@CrossOrigin(origins = "*")
public class RestaurantSuggestionController {

    @Autowired
    RestaurantSuggestionService restaurantSuggestionService;


    @PostMapping("/insert/name")
    public ResponseEntity<Restaurant> insertRestaurantSuggestion(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok().body(restaurantSuggestionService.insertRestaurantSuggestion(restaurant));
    }

    @GetMapping("/get/random/name")
    public ResponseEntity<Restaurant> getRandomRestaurant() {
        return ResponseEntity.ok().body(restaurantSuggestionService.getRandomRestaurant());
    }

}

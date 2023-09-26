package com.assignment.TeamLunch.service;

import com.assignment.TeamLunch.exception.BadRequest;
import com.assignment.TeamLunch.exception.ServerError;
import com.assignment.TeamLunch.model.Restaurant;

public interface RestaurantSuggestionService {
    Restaurant getRandomRestaurant() throws BadRequest, ServerError;

    Restaurant insertRestaurantSuggestion(Restaurant restaurant) throws BadRequest, ServerError;
}

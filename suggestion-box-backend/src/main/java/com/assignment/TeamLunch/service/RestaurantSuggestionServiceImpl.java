package com.assignment.TeamLunch.service;

import com.assignment.TeamLunch.exception.BadRequest;
import com.assignment.TeamLunch.exception.ServerError;
import com.assignment.TeamLunch.model.Restaurant;
import com.assignment.TeamLunch.repository.RestaurantRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class RestaurantSuggestionServiceImpl implements RestaurantSuggestionService {

    protected final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Override
    public Restaurant getRandomRestaurant() throws BadRequest, ServerError {
        Restaurant randomRestaurant;
        try {
            randomRestaurant = restaurantRepository.getRandomRestaurant();
            if (randomRestaurant != null && randomRestaurant.getName() != null && !randomRestaurant.getName().equals("")) {
                return randomRestaurant;
            } else {
                logger.error("No suggestions provided by the users: " + randomRestaurant);
                throw new BadRequest("No suggestions provided by the users. please provide your Suggestion first.");
            }
        } catch (BadRequest badRequest) {
            throw new BadRequest(badRequest.getMessage());
        } catch (Exception exception) {
            logger.error("Error occurred while find the random restaurant name. exception: " + exception.getMessage());
            throw new ServerError("Error occurred while find the random restaurant name, please try again.");
        }
    }

    @Override
    public Restaurant insertRestaurantSuggestion(Restaurant restaurant) throws BadRequest, ServerError {
        try {
            if (restaurant != null && restaurant.getName() != null && !restaurant.getName().equals("")) {
                String modifiedRestaurantName = restaurant.getName().toUpperCase();
                restaurant.setName(modifiedRestaurantName);
                return restaurantRepository.save(restaurant);
            } else {
                logger.error("Invalid restaurant name. " + restaurant);
                throw new BadRequest("Invalid restaurant name.");
            }
        } catch (BadRequest badRequest) {
            throw new BadRequest(badRequest.getMessage());
        } catch (DataIntegrityViolationException exception) {
            logger.error("Restaurant Name already given: " + restaurant + ", exception: " + exception.getMessage());
            throw new BadRequest("Restaurant name already given.");
        } catch (Exception exception) {
            logger.error("Error occurred while provide the suggestion: " + restaurant + ", exception: " + exception.getMessage());
            throw new ServerError("Error occurred while provide the suggestion, please try again.");
        }

    }


}

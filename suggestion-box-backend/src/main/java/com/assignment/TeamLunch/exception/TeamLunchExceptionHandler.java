package com.assignment.TeamLunch.exception;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class TeamLunchExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(BadRequest.class)
    @ResponseBody
    public ErrorResponse badRequest(BadRequest badRequest, HttpServletResponse response) {
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        return new ErrorResponse(HttpStatus.BAD_REQUEST.toString(), badRequest.getMessage());
    }

    @ExceptionHandler(ServerError.class)
    @ResponseBody
    public ErrorResponse serverError(ServerError serverError, HttpServletResponse response) {
        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        return new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.toString(), serverError.getMessage());
    }
}

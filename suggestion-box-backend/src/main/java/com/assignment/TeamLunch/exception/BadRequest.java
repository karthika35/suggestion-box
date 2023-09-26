package com.assignment.TeamLunch.exception;

public class BadRequest extends RuntimeException {
    private String message;

    public BadRequest(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

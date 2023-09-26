package com.assignment.TeamLunch.exception;

public class ServerError extends RuntimeException {
    private String message;

    public ServerError(String message) {
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

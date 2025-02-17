package com.pantryaid.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api") // This makes sure all endpoints start with /api
public class TestController {

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello from the backend!";
    }
}

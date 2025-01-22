package com.railway.TicketManagement;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {
    @RequestMapping
    public String welcome(){
        return "Hello welcome to our website";
    }
}

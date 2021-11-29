package edu.ben.restaurant.controller;

import edu.ben.restaurant.model.MenuItem;
import edu.ben.restaurant.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuItemContoller {

    @Autowired
    private MenuItemService menuItemService;

    @PostMapping
    public ResponseEntity createPost(@RequestBody MenuItem menuItem) {
        menuItemService.createMenuItem(menuItem);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<List<MenuItem>> showAllPosts() {
        return new ResponseEntity(menuItemService.getAllMenuItems(), HttpStatus.OK);
    }
}

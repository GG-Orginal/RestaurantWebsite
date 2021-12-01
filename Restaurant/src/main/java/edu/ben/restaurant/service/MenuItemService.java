package edu.ben.restaurant.service;

import edu.ben.restaurant.model.MenuItem;
import edu.ben.restaurant.repo.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuItemService {

    @Autowired
    private MenuItemRepository menuItemRepository;

    public void createMenuItem(MenuItem menuItem) {
        MenuItem newMenuItem = new MenuItem();
        newMenuItem.setMenuItemName(menuItem.getMenuItemName());
        newMenuItem.setDescription(menuItem.getDescription());
        newMenuItem.setTypeOfMeal(menuItem.getTypeOfMeal());
        newMenuItem.setCost(menuItem.getCost());
        newMenuItem.setTimeToCook(menuItem.getTimeToCook());
        menuItemRepository.save(newMenuItem);
    }

    public Object getAllMenuItems() {
        List<MenuItem> menuItems = menuItemRepository.findAll();
        return menuItems;
    }
}

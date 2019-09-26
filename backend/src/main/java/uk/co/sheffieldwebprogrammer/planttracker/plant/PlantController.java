package uk.co.sheffieldwebprogrammer.planttracker.plant;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/plants")
@CrossOrigin
public class PlantController {

  @GetMapping
  public List<Plant> get(){
    List<Plant> plants = new ArrayList();
    Plant plant = new Plant("plant1");
    Plant plant2 = new Plant("plant2");
    Action action = new Action();
    action.addItem(new Item("asdf", "asdf"));
    plant.addAction("2019-01-01", action);
    plant2.addAction("2019-01-01", action);
    plant2.addAction("2019-09-26", action);
    plants.add(plant);
    plants.add(plant2);

    return plants;
  }
}

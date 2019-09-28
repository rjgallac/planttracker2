package uk.co.sheffieldwebprogrammer.planttracker.plant;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.co.sheffieldwebprogrammer.planttracker.plant.action.Action;
import uk.co.sheffieldwebprogrammer.planttracker.plant.action.ActionType;
import uk.co.sheffieldwebprogrammer.planttracker.plant.measurement.Measurement;
import uk.co.sheffieldwebprogrammer.planttracker.plant.measurement.MeasurementType;
import uk.co.sheffieldwebprogrammer.planttracker.plant.observation.Observation;

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
    Recordings recordings = new Recordings();
    recordings.addObservation(new Observation("asdf"));
    recordings.addMeasurement(new Measurement(MeasurementType.WATER, ""));
    recordings.addMeasurement(new Measurement(MeasurementType.HEIGHT, "100mm"));
    recordings.addAction(new Action(ActionType.WATER));

    plant.addRecordings("2019-01-01", recordings);
    plant2.addRecordings("2019-01-01", recordings);
    plant2.addRecordings("2019-09-26", recordings);

    plants.add(plant);
    plants.add(plant2);

    return plants;
  }
}

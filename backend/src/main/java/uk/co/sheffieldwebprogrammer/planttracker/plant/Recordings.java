package uk.co.sheffieldwebprogrammer.planttracker.plant;

import uk.co.sheffieldwebprogrammer.planttracker.plant.action.Action;
import uk.co.sheffieldwebprogrammer.planttracker.plant.measurement.Measurement;
import uk.co.sheffieldwebprogrammer.planttracker.plant.observation.Observation;
import uk.co.sheffieldwebprogrammer.planttracker.plant.pic.Pic;

import java.util.ArrayList;
import java.util.List;

public class Recordings {
  List<Observation> observations = new ArrayList();
  List<Measurement> measurements = new ArrayList();
  List<Action> actions = new ArrayList<>();
  List<Pic> pics = new ArrayList();
  public void addObservation(Observation observation) {
    this.observations.add(observation);
  }
  public void addMeasurement(Measurement measurement){this.measurements.add(measurement);}
  public void addAction(Action action){this.actions.add(action);}
  public void addPic(Pic pic){this.pics.add(pic);}

  public List<Observation> getObservations() {
    return observations;
  }

  public List<Measurement> getMeasurements() {
    return measurements;
  }

  public List<Action> getActions() {
    return actions;
  }

  public List<Pic> getPics() {
    return pics;
  }
}

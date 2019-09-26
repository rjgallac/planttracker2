package uk.co.sheffieldwebprogrammer.planttracker.plant;

import java.util.HashMap;
import java.util.Map;

public class Plant {
  private String name;
  private Map<String, Action> dates = new HashMap<>();

  public Plant(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public Map<String, Action> getDates() {
    return dates;
  }

  public void addAction(String date, Action action) {
    this.dates.put(date, action);
  }

}

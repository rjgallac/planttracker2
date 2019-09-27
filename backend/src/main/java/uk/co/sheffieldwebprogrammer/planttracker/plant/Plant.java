package uk.co.sheffieldwebprogrammer.planttracker.plant;

import java.util.HashMap;
import java.util.Map;

public class Plant {
  private String name;
  private Map<String, Recordings> dates = new HashMap<>();

  public Plant(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public Map<String, Recordings> getDates() {
    return dates;
  }

  public void addRecordings(String date, Recordings recordings) {
    this.dates.put(date, recordings);
  }

}

package uk.co.sheffieldwebprogrammer.planttracker.plant.measurement;

public class Measurement {
  private MeasurementType measurementType;
  private String text;

  public Measurement(MeasurementType measurementType, String text) {
    this.measurementType = measurementType;
    this.text = text;
  }

  public MeasurementType getMeasurementType() {
    return measurementType;
  }

  public String getText() {
    return text;
  }
}

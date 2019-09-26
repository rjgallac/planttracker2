package uk.co.sheffieldwebprogrammer.planttracker.plant;

public class Item {
  private String type;
  private String text;

  public Item(String type, String text) {
    this.type = type;
    this.text = text;
  }

  public String getType() {
    return type;
  }

  public String getText() {
    return text;
  }
}

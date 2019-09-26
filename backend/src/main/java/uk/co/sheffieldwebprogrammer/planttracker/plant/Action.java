package uk.co.sheffieldwebprogrammer.planttracker.plant;

import java.util.ArrayList;
import java.util.List;

public class Action {
  List<Item> actions = new ArrayList();

  public void addItem(Item item) {
    this.actions.add(item);
  }

  public List<Item> getActions() {
    return actions;
  }
}

package uk.co.sheffieldwebprogrammer.planttracker.plant.action;

public class Action {
  private ActionType actionType;

  public Action(ActionType actionType) {
    this.actionType = actionType;
  }

  public ActionType getActionType() {
    return actionType;
  }
}

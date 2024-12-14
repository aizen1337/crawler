import { SportEvent } from "../types/SportsEvent";

class StateManager {
  private events: Map<string, SportEvent> = new Map();
  clearEventsCache() {
    this.events.clear();
  }
  updateEvent(event: SportEvent) {
    this.events.set(event.id, event);
  }

  getActiveEvents() {
    const filteredEvents = Array.from(this.events.values()).filter(event => event.status !== "REMOVED");
    const result = {}
    filteredEvents.forEach(element => {
        result[element.id] = element
    });
    return result
  }

  getAllEvents(): Map<string, SportEvent> {
   return this.events
  }
}

export const stateManager = new StateManager();

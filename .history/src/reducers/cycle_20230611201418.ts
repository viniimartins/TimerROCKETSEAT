export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interrupetedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleID: string | null;
}

export enum ActionType {
    ADD_CYCLE,
    DELETE_CYCLE,
    UPDATE_CYCLE,
}


export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case "ADD_NEW_CYCLE":
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleID: action.payload.newCycle.id,
      };
    case "INTERRUPT_CURRENT_CYCLE":
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleID) {
            return { ...cycle, interrupetedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleID: null,
      };
    case "MARK_CURRENT_CYCLE_AS_FINISHED":
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleID) {
            return { ...cycle, finishedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleID: null,
      };
    default:
      return state;
  }
}

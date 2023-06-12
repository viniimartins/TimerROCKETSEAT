export enum ActionType {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}


export function addNewCycleAction(){
    return {
        
            type: ActionType.ADD_NEW_CYCLE,
            payload: {
              newCycle,
            },
          
    }
}
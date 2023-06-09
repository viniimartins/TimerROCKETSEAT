import { createContext } from "react";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interrupetedDate?: Date;
  finishedDate?: Date;
}

interface CycleContextType {
  activeCycle: Cycle | undefined;
  activeCycleID: string | null;
  amountSecondsPassed: number;
  markCurentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
}

export const CycleContext = createContext({} as CycleContextType);

export function CycleContextProvider(){
    return (
        <CycleContext.Provider
        value={{
          activeCycle,
          activeCycleID,
          markCurentCycleAsFinished,
          amountSecondsPassed,
          setSecondsPassed,
        }}
      >
    )
}
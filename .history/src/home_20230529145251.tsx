import { createContext, useContext, useState } from "react";

const CycleContext = createContext({
  activeCycle: 1,
});

function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext);

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          activeCycle = 2;
        }}
      ></button>
    </h1>
  );
}

function Countdown() {
  const { activeCycle } = useContext(CycleContext);

  return <h1>Countdown: {activeCycle}</h1>;
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CycleContext.Provider value={{ activeCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CycleContext.Provider>
  );
}

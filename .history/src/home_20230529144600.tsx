import { createContext, useContext } from "react";

const CycleContext = createContext({
  activeCycle: 1,
});

function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext);

  return <h1>NewCycleForm: {activeCycle}</h1>;
}

function Countdown() {
  const { activeCycle } = useContext(CycleContext);


  return <h1>Countdown: {activeCycle }</h1>;
}

export function Home() {
  return (
    <div>
      <NewCycleForm />
      <Countdown />
    </div>
  );
}

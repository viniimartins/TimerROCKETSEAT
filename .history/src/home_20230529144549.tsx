import { createContext, useContext } from "react";

const CycleContext = createContext({
  activeCycle: 1,
});

function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext);

  return <h1>NewCycleForm: {activeCycle }</h1>;
}

function Countdown() {
  return <h1>Countdown</h1>;
}

export function Home() {
  return (
    <div>
      <NewCycleForm />
      <Countdown />
    </div>
  );
}

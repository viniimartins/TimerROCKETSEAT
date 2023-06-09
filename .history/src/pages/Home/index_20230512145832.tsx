export function Home() {
  return (
    <div>
      <form action="">
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" type="text" />

        <label htmlFor="minutesAmount">durante</label>
        <input id="minutesAmount" type="number" />

        <span>minutos.</span>
      </form>

      <div>
        <span>0</span>
        <span>0</span>
         <span></span>
      </div>
    </div>
  );
}

export function NewCycleForm() {
    return (
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          list="task-suggestions"
          placeholder="De um nome para o seu projeto"
          disabled={!!activeCycle}
          {...register("task")}
        />
  
        <datalist id="task-suggestions">
          <option value="Projeto 1"></option>
          <option value="Projeto 2"></option>
          <option value="Projeto 3"></option>
        </datalist>
  
        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          id="minutesAmount"
          placeholder="00"
          type="number"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </FormContainer>
    );
  }
  
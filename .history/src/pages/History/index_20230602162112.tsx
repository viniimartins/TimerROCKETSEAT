import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../contexts/CycleContext";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu historico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{cycle.startDate.toISOString()}</td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluido</Status>
                    )}

                    {cycle.interrupetedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interrupetedDate && (
                      <Status statusColor="red">EM</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}

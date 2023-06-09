import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Tarefa</th>
              <th>Tarefa</th>
            </tr>
          </thead>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}

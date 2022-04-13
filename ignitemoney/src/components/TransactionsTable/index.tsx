import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);


  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <td>Desenvolvimento de website</td>
          <td className="deposit">R$12.000,00</td>
          <td>Desenvolvimento</td>
          <td>19/04/2022</td>
        </tbody>

        <tbody>
          <td>Internet</td>
          <td className="withdraw">- R$120,00</td>
          <td>Desenvolvimento</td>
          <td>19/04/2022</td>
        </tbody>
      </table>
    </Container>
  );
};
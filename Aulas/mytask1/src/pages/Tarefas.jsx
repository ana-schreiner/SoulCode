import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getTarefas } from "../firebase/tarefas";

function Tarefas() {

function carregarDados() {
  // O then devolve a lista de tarefas da coleção
  getTarefas().then((resultados) => {
    console.log(resultados);
  });
}

carregarDados(); //teste temporário

  return (
    <main>
      <Container className="mt-5">
        <h1>Suas tarefas</h1>
        <hr />
        <Link className="btn btn-dark" to="/tarefas/adicionar">Adicionar tarefa</Link>
      </Container>
    </main>
  );
}

export default Tarefas;
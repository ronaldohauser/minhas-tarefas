/* eslint-disable prettier/prettier */
import { useSelector } from 'react-redux'

import Tarefa from '../../components/FiltroCard/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas)
  
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&lquot; e &quot;termo&lquot;
        </p>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.titulo}>
            <Tarefa
              descricao={tarefa.descricao}
              titulo={tarefa.titulo}
              status={tarefa.status}
              prioridade={tarefa.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas

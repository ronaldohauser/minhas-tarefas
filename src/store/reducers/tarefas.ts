/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tarefa from '../../models/Tarefa';
import * as enums from '../../utils/enums/Tarefa';

const tarefaSlice = createSlice({
  name: 'tarefa',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.URGENTE,
      enums.Status.COONCLUIDA,
      'Rever aula 2 do módulo',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Praticar o useEffect',
      3
    ),
  ] as Tarefa[],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload);
    },
  },
});

export const { remove } = tarefaSlice.actions;

export default tarefaSlice.reducer;

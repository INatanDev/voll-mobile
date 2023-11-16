import { NativeBaseProvider, StatusBar} from 'native-base';
import { TEMAS} from './src/estilos/temas';
import Rotas from './src/Rotas';
import api from './src/servicos/api';
import { useEffect } from 'react';

export default function App() {

  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}


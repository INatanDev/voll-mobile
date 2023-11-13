import { VStack, Text, ScrollView, Avatar, Divider, Center} from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500" >Meu Perfil</Titulo>

                <Avatar size="xl" mt={5} source={{ uri: "https://avatars.githubusercontent.com/u/91573949?v=4"}}/>

                <Titulo color="blue.500" > Informações pessoais </Titulo>
                <Titulo fontSize="lg" mb={1} > Natã Ferreira </Titulo>
                <Text> 13/08/1998 </Text>
                <Text> Recife </Text>

                <Divider mt={5} />

                <Titulo color="blue.500" mb={1} >Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}
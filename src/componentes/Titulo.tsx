import { Text, ITextProps } from "native-base"
import { ReactNode } from "react"

interface TituloPros extends ITextProps{
    children: ReactNode
}

export function Titulo( {children, ...rest} ){
    return(
        <Text fontSize="2xl" fontWeight="bold" color="gray.500" textAlign="center" marginTop={5} {...rest} >
            {children}
        </Text>
    )
}
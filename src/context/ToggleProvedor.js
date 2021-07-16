import {createContext, useContext, useState} from 'react'


const ToggleContext= createContext()

export default function ToggleProvedor({children}) {
    const [ estadoPai, setEstadoPai] = useState(false)
    const [ estadoFilho, setEstadoFilho] = useState(false)

    const handleClickEstadoPai = () => {
        setEstadoPai(pState=>!pState);
    }

    const handleClickEstadoFilho = () => {
        setEstadoFilho(pState=>!pState);
    }

    return <ToggleContext.Provider 
        value={{
        estadoPai,
        estadoFilho,
        handleClickEstadoPai,
        handleClickEstadoFilho,
    }}>

        {children}

    </ToggleContext.Provider>
}

function useToogle() {
  return useContext(ToogleContext);
}

export {ToggleProvedor , useToggle};
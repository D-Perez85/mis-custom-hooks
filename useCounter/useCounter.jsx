import { useState } from 'react';

 const useCounter = (initialState = 0) => {
    const [counter, setCounter] = useState(initialState); 
    const incremento = () =>{
        setCounter(counter+1)
    }
    const decremento = () =>{
        setCounter(counter-1)
    }
    const reset = () =>{
        setCounter(initialState)
    }
    return{
        counter,
        incremento,
        decremento, 
        reset
    }
}
export default useCounter; 
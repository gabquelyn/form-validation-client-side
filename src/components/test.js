import { useReducer } from 'react';

const Test = () => {

    const countReducer = (state, action) =>{
        if(action.type === 'ADD'){
            return {count: state.count + 1}
        }

        if(action.type === 'REDUCE'){
            return {count: state.count - 1}
        }
    }
    const [updatedCount, countDispatcher] = useReducer(countReducer, {count:0});

    const addHandler = () => {
        countDispatcher({type: 'ADD'});
    }

    const reduceHandler = () =>{
        countDispatcher ({type: 'REDUCE'})
    }

    return(
        <>
            <button onClick = {addHandler}>ADD</button>
            <p>{updatedCount.count}</p>
            <button onClick = {reduceHandler}>REDUCE</button>
        </>
    )
}
export default Test;
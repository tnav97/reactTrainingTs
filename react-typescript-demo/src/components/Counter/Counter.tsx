import React, { useReducer } from 'react'

interface Props {}

interface counterState {
    count : number
}

type counterAction = updateAction|resetAction
interface updateAction {
    type: 'increment'|'decrement',
    payload: number

}
interface resetAction {
    type: 'reset',

}

const initialState={count:0}

function reducer(state:counterState,action:counterAction){
    switch(action.type){
        case 'increment':
            return {count :state.count +action.payload}
            case 'decrement':
            return {count :state.count -action.payload}
            case 'reset':
                return initialState
default:
    return state
    }
}

function Counter(props: Props) {
    const {} = props
const [state,dispatch]=useReducer(reducer,initialState)
    return (<div>
        Count: {state.count}
        <button onClick={()=>dispatch({type:'increment', payload:10})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement' ,payload:10})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
        
    )
}

export default Counter

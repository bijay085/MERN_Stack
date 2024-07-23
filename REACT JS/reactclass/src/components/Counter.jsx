import React from 'react'
import { useState } from 'react'

//useState()
//Syntax->
//const[value, setValue] = useState(initialValue)
// using hook -> 

const Counter = () => {
    const [count, setCount] = useState(1)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return (
        <>
            {count>0 &&
                (<button className="btn btn-danger" onClick={decrement}>-</button>)
            }
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={increment}>+</button>
        </>
    )
}

export default Counter

//now if we want to hide - button if it goes in (-) then we use ui render
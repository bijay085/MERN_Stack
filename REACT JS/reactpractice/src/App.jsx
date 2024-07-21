import React, { useState } from 'react'
import Products from './components/Products'

function App() {
    var [a,b] = useState(31) //a store old data, b store new updated data
    return (
        <>
        <div className='w-full bg-zinc-500 p-6'>
            <div className='w-44 h-32 rounded-lg bg-red-600'>
            <p>I am using tailwind css.</p>
            </div>
            <Products/>
        </div>
    {/* now we are gonna use react state model type , like how like increase on click */}
        <div className="numberIncrease h-11 bg-orange-600 p-6">
            <p>Number increasing in react using state</p>
            <h1>Value of a (previous state): {a}</h1>
            <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-lg text-xs'>+1</button>
            
        </div>
        </>
        
    )
}

export default App
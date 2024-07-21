import React from 'react'
import Products from './components/Products'

function App() {
    return (
        <div className='w-full h-screen bg-zinc-500'>
            <div className='w-44 h-32 rounded-lg bg-red-600'>
            <p>I am using tailwind css.</p>
            </div>
            <Products/>
        </div>
    )
}

export default App
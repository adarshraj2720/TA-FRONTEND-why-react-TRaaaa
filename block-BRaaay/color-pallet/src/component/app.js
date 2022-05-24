import React from 'react'
import  ReactDOM  from 'react-dom'


import Gray from './gray'
import Red from './red'
import Pink from './pink'
import Grape from './grape'
import Violet from './violet'
import Indigo from './indigo'
import Blue from './blue'
import Cyan from './cyan'
import Teal from './teal'
import Green from './green'
import Lime from './lime'
import Yellow from './yellow'
import Orange from './orange'

function App(){
    return(
        <>
        <div className='color'>
            {/* <div>
                Gray
            </div> */}
        <Gray/>
        </div>
       <div className='color'>
       {/* <div>
                Red
            </div> */}
       <Red/>
       </div>
       <div className='color'>
       <Pink/>
       </div>
       <div className='color'>
       <Grape/>
       </div>
       <div className='color'>
       <Violet/>
       </div>
       <div className='color'>
       <Indigo/>
       </div>
       <div className='color'>
       <Blue/>
       </div>
       <div className='color'>
       <Cyan/>
       </div>
       <div className='color'>
       <Teal/>
       </div>
       <div className='color'>
       <Green/>
       </div>
       <div className='color'>
       <Lime/>
       </div>
       <div className='color'>
       <Yellow/>
       </div>
       <div className='color'>
       <Orange/>
       </div>
       
        </>
    )
}

export default App
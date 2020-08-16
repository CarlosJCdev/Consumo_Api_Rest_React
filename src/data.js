import React, { useState, useEffect } from 'react'


    const Data= ()=>{

        const [datos, setStatic] = useState(null)

        const data= [
            {id: 1, nombre: 'juan'},
            {id: 2, nombre: 'carlos'}
        ]

        useEffect(()=>{
            console.log('useEffect')
            setStatic(data)
        }, [])
        /* useEffect se ejecuta infiniamente, 
        debemos colocar [] para que se ejecute solo una vez*/

        return (
            <div>
                
            </div>
        )
    }


export default Data

import React, { useState, useEffect } from 'react'


    const Data= ()=>{

        const [datos, setStatic] = useState([])

        const obtenerDatosAPI= async()=>{
            const data= await fetch('https://jsonplaceholder.typicode.com/photos')
            const users= await data.json()
            console.log(users)
            setStatic(users)
        }

        useEffect(()=>{
            console.log('useEffect')
            obtenerDatosAPI()
        }, [])
        /* useEffect se ejecuta infiniamente, 
        debemos colocar [] para que se ejecute solo una vez*/

        return (
            <div>
                {
                    datos.map(valor =>(
                    <li key={valor.id}>{valor.title}</li>
                    ))
                }
            </div>
        )
    }


export default Data

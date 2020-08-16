# Consumo básico de API Rest con React


![](https://raw.githubusercontent.com/CarlosJCdev/Login-React-Firebase/master/src/icons/react1.png)

Ejemplos realizados en componentes funcionales

##### Manejo de datos locales `[useState, useEffect]`

```javascript

 const [datos, setStatic] = useState([])

        const data= [
            {id: 1, nombre: 'juan'},
            {id: 2, nombre: 'carlos'}
        ]

        useEffect(()=>{
            console.log('useEffect')
            setStatic(data)
        }, [])
```
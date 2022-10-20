 export function Mensaje(){
    const evento = {
        nombre : "partido",
        marcador1 : 2,
        marcador2 : 2
    }
    function msj(){
    return <h4>hoy hay partido</h4>
    }
    function ganador (r1,r2){
        if(r1 == r2)
           return <h3>Es Empate</h3>
        else 
           if(r1>r2)
              return <h2>Rival 1 es Ganador </h2>   
            else
              return <h2>Rival 2 es Ganador</h2>

    }

    return <>
               <h1>Evento</h1>
               <h3>{ evento.nombre}</h3>
               <p>{ evento.marcador1} - { evento.marcador2 }</p>
               {ganador(evento.marcador1,evento.marcador2)}
           </>
}

export function Registrados (){
    return<>
         <ul>
            <li>Equipo 1</li>
            <li>Equipo 2</li>
            <li>Equipo 3</li>
         </ul>
    
    </>
}
import './style.css'
export function Equipo (props){
    const etiqueta ={
        display:"block",
        border:"1px solid salmon",
        height:"340px",
        padding:"10px",
        width: "250px",
        fontFamily:'fantasy'
    }
     return<div style={ etiqueta }>
           <ul>
               <li>nombre : <p style ={{color:'red', fontFamily:'fantasy'}}>{props.nombre}</p></li>        
               <li>paridos jugados : {props.jugados}</li>   
               <li>promedio : {props.promedio}</li>
               <li>ultimo partido :{props.ultimo}</li>
               <li>record: {props.record[0]}/{props.record[1]}</li>
               <li>juega internacional?{props.internacional? "Si":"No"}</li>          
               <li>ubicado en : {props.ubicado.pais}/{props.ubicado.ciudad}</li>        
            </ul> 
    </div>
        }
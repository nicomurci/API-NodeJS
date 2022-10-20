
import React from 'react'
import ReactDom from 'react-dom/client'
import'./css/bootstrap.min.css'
import {Mensaje, Registrados} from './Mensaje'
import Header, {Menu}from './elements/Header'
import {Evento} from './events/Evento'
import { Equipo } from './Equipo'
import { ListaEventos } from './events/ListaEventos'
import { Tablero } from './dashboard/Tablero'
import { Login } from './users/login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const root = ReactDom.createRoot(document.getElementById('root'))
root.render (<>
   <Router>
   <Menu/>
     <div className='container'>
         <div className='row align-center'>
            <div className='col m-5'>
                <Routes>
                    <Route path="/" element={<ListaEventos/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path = "/tablero/*" element ={<Tablero/>}></Route>
                </Routes>
                
            </div>
         </div>
     </div>

   </Router>
   
 </>)                   
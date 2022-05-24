import React, { Component } from 'react'
import { H4 } from '../styles/Styles'

export class Experiencia extends Component{
    render(){
        return(
            <div>
                    <h3>Experiencia</h3>
                <div>
                    <H4>Analista Funcional</H4>
                    <p>TRANSFIRIENDO S.A</p>
                    <p> SEPTIEMBRE DE 2020 HASTA SEPTIEMBRE 2021</p>

                    <ul>
                        <li>Analizar rendimiento de sistemas</li>
                        <li>Comprobar las funcionalidades del producto final</li>
                        <li>Creacion y ejecucion de Querys</li>
                    </ul>
                </div>
                <div>
                    <H4>COMPUTEC OUTSOURCING S.A.S</H4>
                    <p> FEBRERO DE 2019 HASTA FEBRERO 2020</p>

                    <ul>
                        <li>Apoyar al área de procesamiento y calidad de datos en la etapa de análisis y pruebas de los desarrollos.</li>
                        <li>Desarrollo de HTML y CSS para prototipos de diseño</li>
                        
                    </ul>
                </div>
            

            </div>
        )
    }
}
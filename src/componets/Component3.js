import React, { Component } from 'react'
import { Divlado } from '../styles/Styles'
import Component2 from './Component2'
import Component4 from './Component4'
import { Experiencia } from './Experiencia'


export class Component3 extends Component{
     render() {

        return(
            <Divlado>
                <Component2/>
                <Component4/>
                <Experiencia/>
            </Divlado>
        )
    }
}
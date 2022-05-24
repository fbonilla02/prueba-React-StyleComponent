import React from 'react';
import { Component1 } from '../componets/Component1';
import Component2 from '../componets/Component2';
import { Component3 } from '../componets/Component3';
import { Container } from '../styles/Styles';
import '../styles/styles.css'


const AppContainers = () => {
    return (
        
        <Container>
            <Component1/>
            {/* <Component2/> */}
            <Component3/>
        </Container>
        
    );
};

export default AppContainers;
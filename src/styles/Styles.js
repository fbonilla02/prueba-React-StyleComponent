import styled from 'styled-components'

export const StylesLI = styled.li`
    color: red;
    decoration: none;

`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr;
    padding: 0px 40px;
`
export const Divlado = styled.div`
    grid-area: 1fr;
    
`
export const DivLeft = styled.div`
    grid-area: 100px;
    
`
export const DivCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`
export const H4 = styled.h4`
    font-size: 20px;
`
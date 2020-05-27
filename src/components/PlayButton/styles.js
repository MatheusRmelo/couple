import styled from 'styled-components/native'

export const Button = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;    
    align-items: center;
    justify-content: center;
`;

export const Label  = styled.Text`
    font-size: 10px;
    color: ${({focused}) => focused ? '#fff' : '#000'};
`;
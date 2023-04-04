import styled from 'styled-components/native'; 

interface IButtonProps {
    width: number;
    height: number; 
}

interface IButtonTitleProps {
    fontSize: number;
}

export const ButtonDefault =  styled.TouchableOpacity<IButtonProps>`
    justify-content: center;
    align-items: center;
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;

    background: #3776FF;
    border-radius: 3px;
`;

export const ButtonTitle = styled.Text<IButtonTitleProps>`
    font-family: 'Inter_600SemiBold';
    font-style: normal;
    font-weight: 400;
    font-size: ${({fontSize}) => fontSize}px;
    line-height: 22px;

    color: #FFFFFF;
`; 

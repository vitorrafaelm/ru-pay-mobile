import styled from 'styled-components/native'; 

interface SafeAreaContentProps {
    statusBarHeight: number; 
}

export const SafeArea = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #FCFCFC;
`; 

export const SafeAreaContent = styled.SafeAreaView<SafeAreaContentProps>`
    margin-top: ${({ statusBarHeight }) => statusBarHeight + 20}px;
`;

export const InnetContent = styled.ScrollView`
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    padding: 0px 12px;
`;

export const FormContainer = styled.View`
    margin-top: 40px;
`;

export const Separator = styled.View`
    height: 16px;
`; 

import styled from 'styled-components/native'; 

export const SafeArea = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #FCFCFC;
`; 

export const SafeAreaContent = styled.TouchableWithoutFeedback``;

export const InnetContent = styled.ScrollView`
`;

export const FormContainer = styled.View`
    
`;

export const Separator = styled.View`
    height: 16px;
`; 

export const Logo = styled.Image`
    margin-top: 100px;
    margin-bottom: 50px;
`;

export const OptionText = styled.Text`
    font-family: 'Inter_400Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #000000;

    margin: 32px 0;
`; 

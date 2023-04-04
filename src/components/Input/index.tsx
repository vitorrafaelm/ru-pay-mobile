
import { TextInputProps } from 'react-native';
import { Container, InputLabel, InputText } from './styles'; 

interface InputProps extends TextInputProps {
  label?: string;
}

export function Input({label, ...rest}: InputProps): JSX.Element {
    return (
      <Container>
        {
          label && <InputLabel>{label}</InputLabel>
        }
        
        <InputText
          {...rest} 
        />
      </Container>
        
    )
}
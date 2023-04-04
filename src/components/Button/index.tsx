import { TouchableOpacityProps } from "react-native";
import { ButtonDefault, ButtonTitle } from "./styles";

interface BasicButtonProps extends TouchableOpacityProps {
    title: string;
    width: number;
    height: number;
    fontSize: number;
}

export function BasicButton({title, width, height, fontSize, ...rest}: BasicButtonProps): JSX.Element {
    
    return (
        <ButtonDefault width={width} height={height} {...rest}>
            <ButtonTitle fontSize={fontSize}>{title}</ButtonTitle>
        </ButtonDefault>
    );
}
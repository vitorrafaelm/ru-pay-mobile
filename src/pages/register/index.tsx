import { Keyboard, Platform, StatusBar } from "react-native";
import { Input } from "../../components/Input";
import {
  FormContainer,
  Header,
  InnetContent,
  SafeArea,
  SafeAreaContent,
  Separator,
} from "./styles";

import { BasicButton } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Register(): JSX.Element {

  const navigation = useNavigation(); 

  function handleGotoLoginScreen() {
    navigation.navigate('Login' as never); 
  }

  function handleGotoRegisterStepTwoScreen() {
    navigation.navigate('RegisterStepTwo' as never); 
  }

  return (
    <SafeArea behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <SafeAreaContent statusBarHeight={StatusBar.currentHeight}>
        <InnetContent contentContainerStyle={{ alignItems: "center" }}>
          <Header>
            <BasicButton
              title="Voltar"
              fontSize={18}
              width={111}
              height={31}
              onPress={handleGotoLoginScreen}
            />

            <BasicButton
              title="Próximo"
              fontSize={18}
              width={111}
              height={31}
              onPress={handleGotoRegisterStepTwoScreen}
            />
          </Header>
          <FormContainer>
            <Input label="Nome" placeholder="Vitor Rafael" />
            <Separator />
            <Input label="CPF" placeholder="000.000.000-90" />
            <Separator />
            <Input label="Email" placeholder="vitor@mail.com" />
            <Separator />
            <Input label="Senha" placeholder="****************" />
          </FormContainer>
        </InnetContent>
      </SafeAreaContent>
    </SafeArea>
  );
}

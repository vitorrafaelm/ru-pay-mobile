import { Keyboard, Platform, View } from "react-native";
import { Input } from "../../components/Input";
import {
  FormContainer,
  InnetContent,
  Logo,
  OptionText,
  SafeArea,
  SafeAreaContent,
  Separator,
} from "./styles";

import Logotipo from "../../assets/logo.png";
import { BasicButton } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Login(): JSX.Element {
  const navigation = useNavigation();

  return (
    <SafeArea behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <SafeAreaContent onPress={Keyboard.dismiss}>
        <InnetContent contentContainerStyle={{ alignItems: "center" }}>
          <Logo source={Logotipo} />
          <FormContainer>
            <Input label="E-mail" placeholder="email@example.com" />
            <Separator />
            <Input label="Senha" placeholder="Safe password" />
          </FormContainer>

          <BasicButton
            title="Entrar"
            fontSize={18}
            width={151}
            height={46}
            style={{ marginTop: 43 }}
          />
          <OptionText>Or</OptionText>
          <BasicButton
            title="Cadastrar"
            fontSize={18}
            width={197}
            height={46}
            onPress={() => navigation.navigate("RegisterStepOne" as never)}
          />
        </InnetContent>
      </SafeAreaContent>
    </SafeArea>
  );
}

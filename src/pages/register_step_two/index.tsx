import { Platform, StatusBar } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Input } from "../../components/Input";
import {
  FormContainer,
  Header,
  InnetContent,
  SafeArea,
  SafeAreaContent,
  Separator,
  PickerContainer, 
  PickerLabel
} from "./styles";

import { BasicButton } from "../../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function RegisterStepTwo(): JSX.Element {

  const navigation = useNavigation(); 

  function handleGotoRegisterStepOneScreen() {
    navigation.navigate('RegisterStepOne' as never); 
  }

  const [instituition, setInstituition] = useState();

  return (
    <SafeArea behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <SafeAreaContent statusBarHeight={StatusBar.currentHeight}>
        <InnetContent>
          <Header>
            <BasicButton 
              title="Voltar" 
              fontSize={18} 
              width={111} 
              height={31} 
              onPress={handleGotoRegisterStepOneScreen}
            />

            <BasicButton
              title="Cadastrar"
              fontSize={18}
              width={111}
              height={31}
            />
          </Header>
          <FormContainer>
            <Input label="Matrícula" placeholder="123456789" />
            <Separator />
            <Input
              label="E-mail da universidade"
              placeholder="vitor@ufersa.com.br"
            />
            <Separator />
            <PickerContainer>
              <PickerLabel>Universidade</PickerLabel>
              <Picker
                accessibilityLabel="Universidade"
                itemStyle={{
                  width: 346,
                  height: 80,
                  fontSize: 20,
                  padding: 5,
                  backgroundColor: "#FFFFFF",
                }}
                mode="dropdown"
                shouldRasterizeIOS={false}
                selectedValue={instituition}
                onValueChange={(itemValue) => {
                  setInstituition(itemValue);
                }}
              >
                <Picker.Item enabled label="Selecione uma instituição" value="" />
                <Picker.Item label="UFERSA" value="UFERSA" />
                <Picker.Item label="UFERSA 1" value="UFERSA 1" />
                <Picker.Item label="UFERSA 2" value="UFERSA 2" />
                <Picker.Item label="UFERSA 3" value="UFERSA 3" />
              </Picker>
            </PickerContainer>
            
          </FormContainer>
        </InnetContent>
      </SafeAreaContent>
    </SafeArea>
  );
}

import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { RegisterStepTwo } from '../pages/register_step_two';

const Stack = createStackNavigator();

function MyLogoutStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="RegisterStepOne" component={Register} />
        <Stack.Screen name="RegisterStepTwo" component={RegisterStepTwo} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export { MyLogoutStackRoutes }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from './pages/Alunos/List';
import Add from './pages/Alunos/Add';
import Edit from './pages/Alunos/Edit';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' }
        }}
      >
        <Stack.Screen
          name="List"
          options={{
            title: 'Lista de Alunos'
          }}
          component={List}
        />
        <Stack.Screen
          name="Add"
          options={{
            title: 'Cadastro de Aluno'
          }}
          component={Add}
        />
        <Stack.Screen
          name="Edit"
          options={{
            title: 'Editar Aluno'
          }}
          component={Edit}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

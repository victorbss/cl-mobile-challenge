import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  Alert
} from 'react-native';
import { Container, View, Text, Icon, Fab } from 'native-base';
import { withNavigation } from 'react-navigation';

import { SwipeListView } from 'react-native-swipe-list-view';

import { loadAlunos, removeAluno } from '../../storage/Storage';

export const navigationRef = React.createRef();

export function navigate(name) {
  navigationRef.current?.navigate(name);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  list: {
    padding: 20
  },
  itens: {
    fontSize: 18,
    color: '#333',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },
  removeBtn: {
    paddingTop: 20
  }
});

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [],
      refreshing: false
    };
  }

  async componentDidMount() {
    const result = await loadAlunos();
    const alunosId = [];
    if (result) {
      result.map(aluno => {
        alunosId.push(aluno[0]);
      });
      this.setState({ alunos: alunosId });
    }
  }

  onRefresh() {
    this.setState({ alunos: [] });
    this.componentDidMount();
  }

  handleRemove(alunoId) {
    removeAluno(alunoId);
  }

  doSomething(data) {
    Alert.alert(
      'Remover Aluno',
      'Tem certeza?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Sim', onPress: () => this.handleRemove(data.alunoId) }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <SwipeListView
          style={styles.list}
          data={this.state.alunos}
          renderItem={data => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Edit', { alunoId: data.item })
              }
            >
              <View>
                <Text style={styles.itens}>{data.item}</Text>
              </View>
            </TouchableOpacity>
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          renderHiddenItem={data => (
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={this.doSomething.bind(this, { alunoId: data.item })}
            >
              <Icon name="trash" />
            </TouchableOpacity>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Fab
            active={false}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('Add')}
          >
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}

export default withNavigation(List);

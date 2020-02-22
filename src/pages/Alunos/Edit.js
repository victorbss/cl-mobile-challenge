import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Alert
} from 'react-native';

import { withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { loadAluno, removeAluno, updateAluno } from '../../storage/Storage';

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 15
  },
  section: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
    marginLeft: 10
  },
  errors: {
    color: 'red',
    paddingLeft: 10
  },
  label: {
    marginLeft: 10
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 15,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
});

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      dataNasc: '',
      serie: '',
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      nomeMae: '',
      cpfMae: '',
      dataMensal: ''
    };
  }

  async componentDidMount() {
    const { alunoId } = this.props.route.params;
    const result = await loadAluno(alunoId);

    this.setState({
      nome: JSON.parse(result)[0][1],
      dataNasc: JSON.parse(result)[1][1],
      serie: JSON.parse(result)[2][1],
      cep: JSON.parse(result)[3][1],
      rua: JSON.parse(result)[4][1],
      numero: JSON.parse(result)[5][1],
      complemento: JSON.parse(result)[6][1],
      bairro: JSON.parse(result)[7][1],
      cidade: JSON.parse(result)[8][1],
      estado: JSON.parse(result)[9][1],
      nomeMae: JSON.parse(result)[10][1],
      cpfMae: JSON.parse(result)[11][1],
      dataMensal: JSON.parse(result)[12][1]
    });

    this.props.values.nome = JSON.parse(result)[0][1];
    this.props.values.dataNasc = JSON.parse(result)[1][1];
    this.props.values.serie = JSON.parse(result)[2][1];
    this.props.values.cep = JSON.parse(result)[3][1];
    this.props.values.rua = JSON.parse(result)[4][1];
    this.props.values.numero = JSON.parse(result)[5][1];
    this.props.values.complemento = JSON.parse(result)[6][1];
    this.props.values.bairro = JSON.parse(result)[7][1];
    this.props.values.cidade = JSON.parse(result)[8][1];
    this.props.values.estado = JSON.parse(result)[9][1];
    this.props.values.nomeMae = JSON.parse(result)[10][1];
    this.props.values.cpfMae = JSON.parse(result)[11][1];
    this.props.values.dataMensal = JSON.parse(result)[12][1];
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.section}>Dados do Aluno: {this.state.nome}</Text>
          <Text style={styles.errors}>
            <ErrorMessage name="dataNasc" />
          </Text>
          <Text style={styles.label}>Data de Nascimento:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.dataNasc}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.dataNasc}
            onChangeText={dataNasc =>
              this.props.setFieldValue('dataNasc', dataNasc)
            }
          />
          <Text style={styles.errors}>
            <ErrorMessage name="serie" />
          </Text>
          <Text style={styles.label}>Série de Ingresso:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.serie}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.serie}
            onChangeText={serie => this.props.setFieldValue('serie', serie)}
          />
          <Text style={styles.section}>Endereço:</Text>
          <Text style={styles.errors}>
            <ErrorMessage name="cep" />
          </Text>
          <Text style={styles.label}>CEP:</Text>
          <TextInput
            name="cep"
            style={styles.textInput}
            placeholder={this.state.cep}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.cep}
            onChangeText={cep => this.props.setFieldValue('cep', cep)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="rua" />
          </Text>
          <Text style={styles.label}>Rua:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.rua}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.rua}
            onChangeText={rua => this.props.setFieldValue('rua', rua)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="numero" />
          </Text>
          <Text style={styles.label}>Número:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.numero}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.numero}
            onChangeText={numero => this.props.setFieldValue('numero', numero)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="complemento" />
          </Text>
          <Text style={styles.label}>Complemento:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.complemento}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.complemento}
            onChangeText={complemento =>
              this.props.setFieldValue('complemento', complemento)
            }
          />
          <Text style={styles.errors}>
            <ErrorMessage name="bairro" />
          </Text>
          <Text style={styles.label}>Bairro:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.bairro}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.bairro}
            onChangeText={bairro => this.props.setFieldValue('bairro', bairro)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="cidade" />
          </Text>
          <Text style={styles.label}>Cidade:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.cidade}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.cidade}
            onChangeText={cidade => this.props.setFieldValue('cidade', cidade)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="estado" />
          </Text>
          <Text style={styles.label}>Estado:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.estado}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.estado}
            onChangeText={estado => this.props.setFieldValue('estado', estado)}
          />
          <Text style={styles.section}>Dados da Mãe:</Text>
          <Text style={styles.errors}>
            <ErrorMessage name="nomeMae" />
          </Text>
          <Text style={styles.label}>Nome da Mãe:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.nomeMae}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.nomeMae}
            onChangeText={nomeMae =>
              this.props.setFieldValue('nomeMae', nomeMae)
            }
          />
          <Text style={styles.errors}>
            <ErrorMessage name="cpfMae" />
          </Text>
          <Text style={styles.label}>CPF da Mãe:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.cpfMae}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.cpfMae}
            onChangeText={cpfMae => this.props.setFieldValue('cpfMae', cpfMae)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="dataMensal" />
          </Text>
          <Text style={styles.label}>Dia para Mensalidade:</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.dataMensal}
            placeholderTextColor={'black'}
            onBlur={Keyboard.dismiss}
            value={this.props.values.dataMensal}
            onChangeText={dataMensal =>
              this.props.setFieldValue('dataMensal', dataMensal)
            }
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={this.props.handleSubmit}
          >
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    nome: '',
    dataNasc: '',
    serie: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    nomeMae: '',
    cpfMae: '',
    dataMensal: ''
  }),

  validationSchema: Yup.object().shape({
    nome: Yup.string()
      .min(3, 'O nome deve ter mais de 3 caracteres!')
      .max(100, 'O nome deve ter apenas 100 caracteres!')
      .required('Preencha o Nome:'),
    dataNasc: Yup.string()
      .max(10, 'Informe a data no padrão dd/mm/aaaa')
      .matches(
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
        'Formato Incorreto use dd/mm/aaaa'
      )
      .required('Preencha a Data de Nascimento:'),
    serie: Yup.number()
      .min(1)
      .max(9)
      .required('Preencha a Série de Ingresso:')
      .positive()
      .integer(),

    cep: Yup.string()
      .min(8, 'Digite o CEP completo:')
      .required('Preencha o CEP:'),
    rua: Yup.string()
      .max(120, 'Máximo de 120 caracteres:')
      .required('Preencha a Rua:'),
    numero: Yup.number()
      .required('Preencha o Número:')
      .positive()
      .integer(),
    complemento: Yup.string()
      .max(50, 'Máximo de 50 caracteres:')
      .required('Preencha o Complemento:'),
    bairro: Yup.string()
      .max(100, 'Máximo de 100 caracteres:')
      .required('Preencha o Bairro:'),
    cidade: Yup.string()
      .max(100, 'Máximo de 100 caracteres:')
      .required('Preencha a Cidade:'),
    estado: Yup.string()
      .max(100, 'Máximo de 100 caracteres:')
      .required('Preencha o Estado:'),

    nomeMae: Yup.string()
      .max(100, 'Máximo de 100 caracteres:')
      .required('Preencha o Nome da Mãe:'),
    cpfMae: Yup.string()
      .max(14, 'Informe o CPF corretamente:')
      .matches(/^\d{3}.\d{3}.\d{3}-\d{2}$/, 'CPF com formato incorreto:')
      .required('Preencha o CPF:'),
    dataMensal: Yup.number()
      .required('Preencha o Dia para Mensalidade:')
      .positive()
      .integer()
  }),

  handleSubmit: form => {
    const aluno = Object.entries(form);
    const alunoId = aluno[0][1];
    removeAluno(alunoId);
    updateAluno(alunoId, aluno);
    Alert.alert('Aluno atualizado com sucesso!');
  }
})(EditForm);

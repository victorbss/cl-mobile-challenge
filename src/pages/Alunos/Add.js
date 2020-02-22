import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity
} from 'react-native';

import { withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { saveAluno } from '../../storage/Storage';

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

class AddForm extends React.Component {
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

  render() {
    return (
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.section}>Dados do Aluno:</Text>
          <Text style={styles.errors}>
            <ErrorMessage name="nome" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            onBlur={Keyboard.dismiss}
            value={this.props.values.nome}
            onChangeText={nome => this.props.setFieldValue('nome', nome)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="dataNasc" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Data de Nascimento"
            onBlur={Keyboard.dismiss}
            value={this.props.values.dataNasc}
            onChangeText={dataNasc =>
              this.props.setFieldValue('dataNasc', dataNasc)
            }
          />
          <Text style={styles.errors}>
            <ErrorMessage name="serie" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Série de Ingresso (1º ao 9º ano)"
            onBlur={Keyboard.dismiss}
            value={this.props.values.serie}
            onChangeText={serie => this.props.setFieldValue('serie', serie)}
          />
          <Text style={styles.section}>Endereço:</Text>
          <Text style={styles.errors}>
            <ErrorMessage name="cep" />
          </Text>
          <TextInput
            name="cep"
            style={styles.textInput}
            placeholder="CEP"
            onBlur={Keyboard.dismiss}
            value={this.props.values.cep}
            onChangeText={cep => this.props.setFieldValue('cep', cep)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="rua" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Rua"
            onBlur={Keyboard.dismiss}
            value={this.props.values.rua}
            onChangeText={rua => this.props.setFieldValue('rua', rua)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="numero" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Número"
            onBlur={Keyboard.dismiss}
            value={this.props.values.numero}
            onChangeText={numero => this.props.setFieldValue('numero', numero)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="complemento" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Complemento"
            onBlur={Keyboard.dismiss}
            value={this.props.values.complemento}
            onChangeText={complemento =>
              this.props.setFieldValue('complemento', complemento)
            }
          />
          <Text style={styles.errors}>
            <ErrorMessage name="bairro" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Bairro"
            onBlur={Keyboard.dismiss}
            value={this.props.values.bairro}
            onChangeText={bairro => this.props.setFieldValue('bairro', bairro)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="cidade" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Cidade"
            onBlur={Keyboard.dismiss}
            value={this.props.values.cidade}
            onChangeText={cidade => this.props.setFieldValue('cidade', cidade)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="estado" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Estado"
            onBlur={Keyboard.dismiss}
            value={this.props.values.estado}
            onChangeText={estado => this.props.setFieldValue('estado', estado)}
          />
          <Text style={styles.section}>Dados da Mãe:</Text>
          <Text style={styles.errors}>
            <ErrorMessage name="nomeMae" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nome da Mãe"
            onBlur={Keyboard.dismiss}
            value={this.props.values.nomeMae}
            onChangeText={nomeMae =>
              this.props.setFieldValue('nomeMae', nomeMae)
            }
          />
          <Text style={styles.errors}>
            <ErrorMessage name="cpfMae" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="CPF da Mãe"
            onBlur={Keyboard.dismiss}
            value={this.props.values.cpfMae}
            onChangeText={cpfMae => this.props.setFieldValue('cpfMae', cpfMae)}
          />
          <Text style={styles.errors}>
            <ErrorMessage name="dataMensal" />
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Data para Mensalidade"
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
    saveAluno(Object.entries(form));
    alert('Aluno cadastrado com sucesso!');
  }
})(AddForm);

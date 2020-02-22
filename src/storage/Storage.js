import { AsyncStorage } from 'react-native';

export const saveAluno = async aluno => {
  try {
    return await AsyncStorage.setItem(aluno[0][1], JSON.stringify(aluno));
  } catch (error) {
    console.error('AsyncStorage#saveAluno error: ' + error.message);
  }
};

export const loadAluno = async alunoId => {
  try {
    const aluno = await AsyncStorage.getItem(alunoId);

    return aluno;
  } catch (error) {
    console.error('AsyncStorage#loadAlunos error: ' + error.message);
  }
};

export const updateAluno = async (alunoId, aluno) => {
  try {
    await AsyncStorage.mergeItem(alunoId, JSON.stringify(aluno));
  } catch (error) {
    console.error('AsyncStorage#updateAluno error: ' + error.message);
  }
};

export const removeAluno = async alunoId => {
  try {
    await AsyncStorage.removeItem(alunoId);
  } catch (error) {
    console.error('AsyncStorage#updateAluno error: ' + error.message);
  }
};

export const loadAlunos = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);

    return items;
  } catch (error) {
    console.error('AsyncStorage#loadAlunos error: ' + error.message);
  }
};

export const logStorage = async () => {
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) => {
        console.log({ [store[i][0]]: store[i][1] });
        return true;
      });
    });
  });
};

export const clearStorage = async () => {
  AsyncStorage.clear();
};

import axios from 'axios';
import store from '../../store';

export default axios.create({
  baseURL: 'http://192.168.1.108:8888/',
  timeout: 1000,
  headers: { 'JWT-TOKEN': store.getState.jwtToken },
});


_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};
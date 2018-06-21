import axios from 'axios';
import config from '../apiConfig';

export default class AssessmentAPI {

  static fetch() {
    return axios({
      method: 'GET',
      url: `${config.getEnvironmentBaseUrl()}/stages`,
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
  }

  static save(data) {
    return axios({
      method: 'POST',
      url: `${config.getEnvironmentBaseUrl()}/stages?access_token=${data.authToken}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
  }

  static delete() {
    return axios({
      method: 'DELETE',
      url: `${config.getEnvironmentBaseUrl()}/stages`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
  }

}
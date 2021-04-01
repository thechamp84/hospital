// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'umi-request';
import { message } from 'antd';

const codeMessage = {
  200: 'The server successfully returned the requested data ',
  201: 'The new or modified data was successful. ',
  202: ' A request has been queued in the background (asynchronous task) ',
  204: ' Successfully deleted data. ',
  400: ' There was an error in the request sent, and the server did not create or modify data. ',
  401: ' The user does not have permission (token, username, password is wrong). ',
  403: ' The user is authorized, but access is prohibited. ',
  404: 'The request sent was for a non-existent record, the server did not operate ',
  406: ' The format of the request is not available. ',
  410: ' The requested resource is permanently deleted and will no longer be obtained. ',
  422: ' When creating an object, a validation error occurred. ',
  500: ' server error occurred, please check the server ',
  502: ' Bad Gateway ',
  503: ' service is not available, the server is temporarily overloading or maintenance ',
  504: ' Gateway Timeout ',
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function request(url, options = {}) {
  const defaultOptions = {
    parseResponse: false,
    // headers: {
    //   'x-auth-token': localStorage.getItem('TOKEN'),
    //   'login-type': localStorage.getItem('login-type'),
    //   ...options?.header
    // },
    ...options,
  };
  console.log("request call1",options);
  return fetch(url, defaultOptions).then((response) => {
    console.log("request" ,response,url);
    const { status } = response;
    if (status === 401) {
      localStorage.removeItem('TOKEN');
      localStorage.removeItem('antd-pro-authority');
      window.location.href = '/user/login';
      return;
    }


    if (status >= 200 && status <= 399) return response.json();
    const errortext = response.message || codeMessage[response.status];
    const data = response.json();
    //console.log("request data",data);
    const errResponse = data
      .then((res) => {
        const errtext = res.message || codeMessage[res.status];
        const error = new Error(errtext);
        error.success = res.status;
        error.message = res.message;
        error.response = res;
        return error;
      })
      .catch((e) => {
        return e;
      });
    throw errResponse;
    // const data = response.json();
    // return data;
    // data.then((res) => message.error(res.message, 0.8));

    //Old code:
    // const errortext = response.message || codeMessage[response.status] ;

    // const error = new Error(errortext);
    // error.name = response.status;
    // error.response = response;
    // throw error;
    // const data = response.json();
    // return data;
    // data.then((res) => message.error(res.message, 0.8));
  });
}

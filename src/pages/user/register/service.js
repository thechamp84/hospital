// import request from 'umi-request';
import request from '../../../utils/request'

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    data: params,
  });
}
export async function userRegister(params) {
  return request('/api/v1/company/registration', {
    method: 'POST',

    data: params,
  });
}

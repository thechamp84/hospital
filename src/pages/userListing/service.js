import request from '@/utils/request';

export async function getAllUsers(params) {
  return request('/api/v1/users', {
    method: 'GET',
  });
}

export async function getUserById(id) {
  return request('/api/v1/users/' + id, {
    method: 'GET',
  });
}


export async function deleteUser(id) {
  return request('/api/v1/users/' + id, {
    method: 'DELETE',
  });
}


export async function updateStatus(id,active) {
  return request('/api/v1/users/update-user/' + id, {
    method: 'PUT',
    data : {active}
  });
}
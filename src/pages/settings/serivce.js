import request from '@/utils/request';

export async function searchCode(code) {
  return request('/api/v1/codes/search?code='+code+'&limit=10', {
    method: 'GET',
  });
}
export async function createWarehouse(params) {
  return request('/api/v1/warehouse', {
    method: 'POST',
    data:params
  });
}

export async function editWarehouse(params,_id) {
  return request('/api/v1/warehouse/'+_id, {
    method: 'PUT',
    data:params
  });
}

export async function deleteWarehouse(params) {
  return request('/api/v1/warehouse/'+params, {
    method: 'DELETE',
  });
}

export async function getAllWarehouse(params) {
  return request('/api/v1/warehouse/', {
    method: 'GET',
  });
}

export async function updateProfileInformationCompany(params) {
  return request('/api/v1/company/profile', {
    method: 'PUT',
    data:params
  });
}
export async function updateProfileInformationAdmin(params) {
  return request('/api/v1/admin/profile', {
    method: 'PUT',
    data:params
  });
}

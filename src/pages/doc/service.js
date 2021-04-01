import request from '@/utils/request';

export async function getAllStates(params) {
  console.log("services call");
  return request('/states/all', {
    method: 'GET',
  });
}
export async function createTag(params) {
  return request('/api/v1/tags', {
    method: 'POST',
    data: params,
  });
}
export async function searchContact(mobile, code) {
  return request('/api/v1/job/search-contact?contactNo=' + mobile + '&countryCode=' + code, {
    method: 'get',
  });
}
export async function editTag(id, params) {
  return request('/api/v1/tags/' + id, {
    method: 'PUT',
    data: params,
  });
}
export async function getJobById(id) {
  return request('/api/v1/job/' + id, {
    method: 'GET',
  });
}
export async function deleteTag(id) {
  return request('/api/v1/tags/'+id, {
    method: 'DELETE',
  });
}

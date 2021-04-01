import request from '@/utils/request';

export function acceptAdminInvitation(params) {
  return request('/api/v1/admin/accept-invitation', {
    method: 'POST',
    data: params,
  });
}
export function acceptCompanyInvitation(params) {
  return request('/api/v1/company/accept-invitation', {
    method: 'POST',
    data: params,
  });
}

export async function forgotPassword(email, type) {
  return request(`/api/v1/session/forget-password?email=${email}&type=${type}`);
}

export async function resetPassword(param) {
  return request(`/api/v1/session/reset-password`, {
    method: 'POST',
    data: param,
  });
}

export async function UserLogin(params) {
  return request(`/auth/login`, {
    method: 'POST',
    data: params,
  });
}

// export async function UserLogin(params) {
//   return request(`/api/v1/session/login`, {
//     method: 'POST',
//     data: params,
//   });
// }
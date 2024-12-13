import { config } from '../config';
import type { LoginFormData, SignupFormData } from '../../types/auth';

export async function loginApi(data: LoginFormData) {
  const response = await fetch(`${config.apiUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  return response.json();
}

export async function createAdminApi(data: SignupFormData) {
  const response = await fetch(`${config.apiUrl}/auth/admin/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create admin account');
  }

  return response.json();
}

export async function checkAdminExistsApi() {
  const response = await fetch(`${config.apiUrl}/auth/admin/exists`);
  
  if (!response.ok) {
    throw new Error('Failed to check admin existence');
  }

  return response.json();
}
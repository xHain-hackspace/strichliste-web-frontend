const API_URL = 'http://v2.strichliste.org/api/';

export async function fetchJson(
  endpoint: string,
  options: RequestInit = {}
  // tslint:disable-next-line:no-any
): Promise<any> {
  return fetch(API_URL + endpoint, options).then(async res => res.json());
}

// tslint:disable-next-line:no-any
export async function post(endpoint: string, params: any): Promise<any> {
  const options: RequestInit = {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  };
  return fetch(API_URL + endpoint, options).then(async res => res.json());
}

// tslint:disable-next-line:no-any
export async function get(endpoint: string): Promise<any> {
  return fetch(API_URL + endpoint).then(async res => res.json());
}
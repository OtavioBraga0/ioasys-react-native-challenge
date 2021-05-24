import axios from 'axios';
import {Enterprise} from '../../domain/entities/enterprise';
import {AuthCredentials} from '../../domain/entities/user';

export async function filterEnterprises(
  search: string,
  type: number,
  headers: AuthCredentials,
): Promise<{enterprises: Enterprise[]}> {
  const enterprises = await axios.get(
    `/enterprises${(search || type) && '?'}${search && `name=${search}&`}${
      type ? `enterprise_types=${type}` : ''
    }`,
    {headers},
  );

  return enterprises.data;
}

export async function getEnterprises(
  headers: AuthCredentials,
): Promise<{enterprises: Enterprise[]}> {
  const enterprises = await axios.get('/enterprises', {headers});

  return enterprises.data;
}

export async function getDetailedEnterprise(
  id: number,
  headers: AuthCredentials,
): Promise<{enterprise: Enterprise}> {
  return (await axios.get(`/enterprises/${id}`, {headers})).data;
}

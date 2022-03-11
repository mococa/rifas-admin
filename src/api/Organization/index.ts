import { Organization } from '_types/Organization';
import { request } from '..';

export class OrganizationAPI {
  static get(): Promise<Organization> {
    return request.get(`/organization`);
  }

  static save(organization: Organization): Promise<Organization> {
    return request.patch('/organization', organization);
  }
}

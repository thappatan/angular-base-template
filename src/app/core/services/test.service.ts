import { Injectable } from '@angular/core';
import { BaseService } from './http-base.service';

export interface TestEntity {
  id?: string | number;
  foo?: string;
  bar?: number;
}

@Injectable({ providedIn: 'root' })
export class TestService extends BaseService {
  constructor() {
    super({
      baseUrl: 'inline-base-url',
      resourceName: 'inline-resource-name',
    });
  }
}

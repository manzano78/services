import { Service } from './Service'

export type GetService = <S extends Service>(
  serviceClass: ServiceConstructor<any[], S>
) => S

export interface ServiceConstructor<P extends any[], S extends Service> {
  new (getService: GetService, ...params: P): S
}

import { Service, ServiceConstructor } from '../Service'

export class ServicesContainer {
  private readonly services: Map<ServiceConstructor<any, Service>, Service>

  constructor() {
    this.services = new Map<ServiceConstructor<any, Service>, Service>()
    this.getService = this.getService.bind(this)
    this.registerService = this.registerService.bind(this)
  }

  getService<S extends Service>(
    ServiceConstructor: ServiceConstructor<any[], S>
  ) {
    const service = this.services.get(ServiceConstructor)

    if (!service) {
      throw new Error(
        `Could not resolve service of type '${ServiceConstructor.name}'`
      )
    }

    return service as S
  }

  registerService<P extends any[], S extends Service>(
    Service: ServiceConstructor<P, S>,
    ...params: P
  ) {
    const service = new Service(this.getService, ...params)

    this.services.set(Service, service)
  }
}

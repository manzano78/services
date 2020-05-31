import { GetService } from './Service-types'

export abstract class Service {
  protected readonly getService: GetService

  constructor(getService: GetService) {
    this.getService = getService
  }
}

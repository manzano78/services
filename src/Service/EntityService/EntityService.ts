import { UnsupportedOperationError } from './UnsupportedOperationError'
import { Page, Predicate, Sort } from './EntityService-types'
import { GetService, Service } from '..'

export abstract class EntityService<Entity, ID> extends Service {
  constructor(getService: GetService) {
    super(getService)
    this.createOne = this.createOne.bind(this)
    this.createMany = this.createMany.bind(this)
    this.updateOne = this.updateOne.bind(this)
    this.updateMany = this.updateMany.bind(this)
    this.getOne = this.getOne.bind(this)
    this.getMany = this.getMany.bind(this)
    this.getAll = this.getAll.bind(this)
    this.deleteOne = this.deleteOne.bind(this)
    this.deleteMany = this.deleteMany.bind(this)
    this.getPage = this.getPage.bind(this)
  }

  createOne(entity: Entity): Promise<[ID, Entity]> {
    throw new UnsupportedOperationError()
  }

  createMany(entities: Entity[]): Promise<Array<[ID, Entity]>> {
    throw new UnsupportedOperationError()
  }

  updateOne(entityId: ID, entity: Entity, updateArg?: any): Promise<void> {
    throw new UnsupportedOperationError()
  }

  updateMany(entities: Array<[ID, Entity]>, updateArg?: any): Promise<void> {
    throw new UnsupportedOperationError()
  }

  getOne(id: ID, cancellationSignal?: any): Promise<Entity> {
    throw new UnsupportedOperationError()
  }

  getMany(ids: ID[], cancellationSignal?: any): Promise<Entity[]> {
    throw new UnsupportedOperationError()
  }

  getAll(
    sort?: Sort,
    predicate?: Predicate,
    cancellationSignal?: any
  ): Promise<Entity[]> {
    throw new UnsupportedOperationError()
  }

  deleteOne(id: ID): Promise<void> {
    throw new UnsupportedOperationError()
  }

  deleteMany(ids: ID[]): Promise<void> {
    throw new UnsupportedOperationError()
  }

  getPage(
    page: number,
    size: number,
    sort?: Sort,
    predicate?: Predicate,
    cancellationSignal?: any
  ): Promise<Page<Entity>> {
    throw new UnsupportedOperationError()
  }
}

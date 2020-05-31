export class UnsupportedOperationError extends Error {
  constructor() {
    super('This operation is not supported')
  }
}

import { Page } from './EntityService-types'

export function toPage<E>(
  page: number,
  size: number,
  list: E[],
  totalFilteredCount: number,
  totalCount?: number
): Page<E> {
  const totalPages = Math.ceil(totalFilteredCount / size)
  const startIndex = (page - 1) * size + 1
  const endIndex = startIndex + list.length - 1
  const hasPrevious = page !== 1
  const hasNext = page !== totalPages

  return {
    page,
    totalPages,
    hasPrevious,
    hasNext,
    startIndex,
    endIndex,
    list,
    totalFilteredCount,
    totalCount
  }
}

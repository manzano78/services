export interface Page<E> {
  page: number
  totalPages: number
  hasPrevious: boolean
  hasNext: boolean
  startIndex: number
  endIndex: number
  list: E[]
  totalFilteredCount: number
  totalCount?: number
}

export type Sidx = string
export type Sord = 'asc' | 'desc'

export type SortItem = Sidx | [Sidx, Sord]
export type Sort = SortItem[]
export type Predicate =
  | PredicatesGroup
  | EqualsPredicate
  | ContainsPredicate
  | GreaterThanPredicate
  | GreaterThanEqualPredicate
  | IsNullPredicate
  | IsNotNullPredicate

export interface PredicatesGroup {
  type: 'conjunction' | 'disjunction'
  predicates: Array<Predicate>
}

export interface EqualsPredicate extends FieldComparisonPredicate {
  type: 'equals'
}

export interface GreaterThanPredicate extends FieldComparisonPredicate {
  type: 'greaterThan'
}

export interface GreaterThanEqualPredicate extends FieldComparisonPredicate {
  type: 'greaterThanEqual'
}

export interface ContainsPredicate extends FieldComparisonPredicate<string> {
  type: 'contains'
  isCaseSensitive?: boolean
}

export interface IsNullPredicate extends FieldPredicate {
  type: 'isNull'
}

export interface IsNotNullPredicate extends FieldPredicate {
  type: 'isNotNull'
}

interface FieldPredicate {
  path: string
}

interface FieldComparisonPredicate<V = any> extends FieldPredicate {
  path: string
  value: V
}

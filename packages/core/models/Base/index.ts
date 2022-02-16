export type ID = string

export type EnumEntity = {
  id: string
  name: string
}

export interface BaseModel {
  id: ID
  createdAt?: string | null
  createdById?: ID | null
  updatedAt?: string | null
  updatedById?: ID | null
  deletedAt?: string | null
  deletedById?: ID | null
}

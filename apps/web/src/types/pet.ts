export type PetSpecies = 'dog' | 'cat'

export type PetSex = 'male' | 'female'

export type PetSize = 'small' | 'medium' | 'large'

export interface Pet {
  id: string
  name: string
  species: PetSpecies
  breed: string
  age: number
  sex: PetSex
  size: PetSize
  location: string
  distanceKm?: number
  imageUrl: string
  traits: string[]

  description: string
  shelterName: string
  vaccinated: boolean
  neutered: boolean
}

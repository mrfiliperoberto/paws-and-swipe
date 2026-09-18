import type { Pet } from '../types/pet'

export const pets: Pet[] = [
  {
    id: 'pet-001',
    name: 'Luna',
    species: 'dog',
    breed: 'Golden Retriever Mix',
    age: 2,
    sex: 'female',
    size: 'medium',
    location: 'Brighton',
    distanceKm: 3.2,
    imageUrl:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80',
    traits: [
      'Friendly',
      'Vaccinated',
      'Good with dogs',
    ],
  },
]
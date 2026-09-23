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
    traits: ['Friendly', 'Vaccinated', 'Good with dogs'],
    description:
      'Luna is a gentle and affectionate dog who loves people, walks, and spending time with other dogs. She is looking for an active home where she can be part of the family.',
    shelterName: 'Brighton Animal Rescue',
    vaccinated: true,
    neutered: true,
  },
  {
    id: 'pet-002',
    name: 'Milo',
    species: 'cat',
    breed: 'Domestic Shorthair',
    age: 1,
    sex: 'male',
    size: 'small',
    location: 'Brighton',
    distanceKm: 5.8,
    imageUrl:
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=80',
    traits: ['Playful', 'Vaccinated', 'Indoor'],
    description:
      'Milo is a curious and playful cat who enjoys exploring, relaxing by the window, and being close to people once he feels comfortable.',
    shelterName: 'Brighton Animal Rescue',
    vaccinated: true,
    neutered: true,
  },
  {
    id: 'pet-003',
    name: 'Bailey',
    species: 'dog',
    breed: 'Mixed Breed',
    age: 4,
    sex: 'female',
    size: 'large',
    location: 'Hove',
    distanceKm: 8.1,
    imageUrl:
      'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=80',
    traits: ['Calm', 'House trained', 'Good with children'],
    description:
      'Bailey is a calm and loyal companion who enjoys relaxed walks and spending time with people. She would thrive in a patient and loving home.',
    shelterName: 'Hove Pet Rescue',
    vaccinated: true,
    neutered: true,
  },
]
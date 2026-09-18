import { useParams } from 'react-router-dom'

import { pets } from '../../mocks/pets'

function PetDetailsPage() {
  const { petId } = useParams()

  const pet = pets.find((item) => item.id === petId)

  if (!pet) {
    return <p>Pet not found.</p>
  }

  return (
    <main>
      <img
        src={pet.imageUrl}
        alt={`${pet.name}, ${pet.breed}`}
        width="400"
      />

      <h1>{pet.name}</h1>
      <p>{pet.breed}</p>
    </main>
  )
}

export default PetDetailsPage
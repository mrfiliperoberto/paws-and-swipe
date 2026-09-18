import type { Pet } from '../../../types/pet'

import './PetCard.css'

interface PetCardProps {
  pet: Pet
}

function PetCard({ pet }: PetCardProps) {
  return (
    <article className="pet-card">
      <img
        className="pet-card__image"
        src={pet.imageUrl}
        alt={`${pet.name}, ${pet.breed}`}
      />

      <div className="pet-card__content">
        <div className="pet-card__heading">
          <div>
            <h2 className="pet-card__name">{pet.name}</h2>

            <p className="pet-card__details">
              {pet.breed} · {pet.age} {pet.age === 1 ? 'year' : 'years'} old
            </p>
          </div>

          <span className="pet-card__size">
            {pet.size}
          </span>
        </div>

        <p className="pet-card__location">
          {pet.location}

          {pet.distanceKm !== undefined && (
            <> · {pet.distanceKm} km away</>
          )}
        </p>

        <div className="pet-card__traits">
          {pet.traits.map((trait) => (
            <span
              className="pet-card__trait"
              key={trait}
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default PetCard
import { Link, useParams } from 'react-router-dom'

import Button from '../../components/ui/Button/Button'
import { pets } from '../../mocks/pets'

import './PetDetailsPage.css'

function PetDetailsPage() {
  const { petId } = useParams()

  const pet = pets.find((item) => item.id === petId)

  if (!pet) {
    return (
      <main className="pet-details">
        <div className="pet-details__not-found">
          <h1>Pet not found</h1>

          <p>
            We couldn't find the pet you're looking for.
          </p>

          <Link to="/discover">
            Back to discovery
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pet-details">
      <Link
        className="pet-details__back"
        to="/discover"
      >
        ← Back to discovery
      </Link>

      <article className="pet-details__card">
        <div className="pet-details__media">
          <img
            className="pet-details__image"
            src={pet.imageUrl}
            alt={`${pet.name}, ${pet.breed}`}
          />
        </div>

        <div className="pet-details__content">
          <header>
            <p className="pet-details__eyebrow">
              Looking for a home
            </p>

            <h1 className="pet-details__name">
              {pet.name}
            </h1>

            <p className="pet-details__breed">
              {pet.breed}
            </p>
          </header>

          <div className="pet-details__facts">
            <span>
              {pet.age} {pet.age === 1 ? 'year' : 'years'} old
            </span>
            <span>{pet.sex}</span>
            <span>{pet.size}</span>
          </div>

          <p className="pet-details__location">
            {pet.location}
            {pet.distanceKm !== undefined && (
              <> · {pet.distanceKm} km away</>
            )}
          </p>

          <div className="pet-details__traits">
            {pet.traits.map((trait) => (
              <span
                className="pet-details__trait"
                key={trait}
              >
                {trait}
              </span>
            ))}
          </div>

          <section className="pet-details__section">
            <h2>About {pet.name}</h2>
            <p>{pet.description}</p>
          </section>

          <section className="pet-details__section">
            <h2>Health</h2>

            <dl className="pet-details__health">
              <div>
                <dt>Vaccinated</dt>
                <dd>{pet.vaccinated ? 'Yes' : 'No'}</dd>
              </div>

              <div>
                <dt>Neutered</dt>
                <dd>{pet.neutered ? 'Yes' : 'No'}</dd>
              </div>
            </dl>
          </section>

          <section className="pet-details__shelter">
            <p className="pet-details__shelter-label">
              Listed by
            </p>

            <p className="pet-details__shelter-name">
              {pet.shelterName}
            </p>
          </section>

          <Button>
            Apply to Adopt
          </Button>
        </div>
      </article>
    </main>
  )
}

export default PetDetailsPage
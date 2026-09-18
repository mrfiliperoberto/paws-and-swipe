import PetCard from '../../components/pet/PetCard/PetCard'
import { pets } from '../../mocks/pets'

import './DiscoveryPage.css'

function DiscoveryPage() {
  return (
    <main className="discovery-page">
      <header className="discovery-page__header">
        <p className="discovery-page__eyebrow">
          Find your companion
        </p>

        <h1 className="discovery-page__title">
          Pets looking for a home
        </h1>

        <p className="discovery-page__description">
          Discover pets from shelters and rescue organizations
          looking for their next home.
        </p>
      </header>

      <section
        className="discovery-page__grid"
        aria-label="Pets available for adoption"
      >
        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
          />
        ))}
      </section>
    </main>
  )
}

export default DiscoveryPage
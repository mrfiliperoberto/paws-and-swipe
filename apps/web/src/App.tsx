import Button from './components/ui/Button/Button'
import PetCard from './components/pet/PetCard/PetCard'
import { pets } from './mocks/pets'

import './App.css'

function App() {
  const featuredPet = pets[0]

  return (
    <main className="app">
      <h1>Paws & Swipe</h1>

      <p>Find your new best friend.</p>

      {featuredPet && (
        <PetCard pet={featuredPet} />
      )}

      <Button>Discover pets</Button>
    </main>
  )
}

export default App
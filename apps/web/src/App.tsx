import { Navigate, Route, Routes } from 'react-router-dom'
import PetDetailsPage from './pages/PetDetails/PetDetailsPage'
import DiscoveryPage from './pages/Discovery/DiscoveryPage'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/discover" replace />}
      />

      <Route
        path="/discover"
        element={<DiscoveryPage />}
      />
      <Route
        path="/pets/:petId"
        element={<PetDetailsPage />}
      />
    </Routes>
  )
}

export default App
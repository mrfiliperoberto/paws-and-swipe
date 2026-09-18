import { Navigate, Route, Routes } from 'react-router-dom'

import AppLayout from './components/layout/AppLayout/AppLayout'
import DiscoveryPage from './pages/Discovery/DiscoveryPage'
import PetDetailsPage from './pages/PetDetails/PetDetailsPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
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
      </Route>
    </Routes>
  )
}

export default App
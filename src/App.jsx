
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import GenrePage from './pages/GenrePage'
import CarouselPage from './pages/CarouselPage'
import Dashboard from './pages/Dashboard'
import MoviePage from './pages/MoviePage'
import ProtectedRoutes from './protectedRoute/ProtectedRoutes'


function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= <ProtectedRoutes>
         <Dashboard/>
        </ProtectedRoutes>/>

        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/genres" element=<ProtectedRoutes>
          <GenrePage/>
        </ProtectedRoutes>/>

        <Route path="/carousel" element=<ProtectedRoutes>
        <CarouselPage/>
      </ProtectedRoutes>/>

        <Route path="/dashboard" element=<ProtectedRoutes>
        <Dashboard/>
      </ProtectedRoutes>/>

        <Route path="/movies" element=<ProtectedRoutes>
        <MoviePage/>
      </ProtectedRoutes>/>
      
        <Route path="*" element={<NotFoundPage/>}/>
        {/* if no page matches any above page the route will be this */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HeaderandFooter from './Componente/routerfolder/Headerandfooter.jsx'
import HomeRoute from './Componente/Home/HomeRoute.jsx'




const root = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HeaderandFooter />}>
      {/* <Route path='' element={Home}/> */}
       <Route path='' element={<HomeRoute/>}/> 

    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root} />
  </StrictMode>,
)

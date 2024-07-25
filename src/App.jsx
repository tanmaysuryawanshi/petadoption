import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pet } from './Pet'
import { SearchParams } from './SearchParams'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Details from './Details'
import Example from './Table'
import DetailsErrorBoundary from './Details'

const queryClient=new QueryClient(
  {
    defaultOptions:{
      queries:{
        staleTime:Infinity,
        cacheTime:Infinity,
      }
    }
  }
)
function App() {
 
  return (
    <BrowserRouter>
<QueryClientProvider client={queryClient}>
      <header>
      <Link to="/">Pet Adoption</Link>
      </header>
     
      <Routes>
        <Route path='/details/:id' element={<DetailsErrorBoundary />}/>
        <Route path='/' element={<SearchParams/>}/>
      </Routes>
     
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App

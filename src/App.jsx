import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'
const App = () => {
  return (
    
    <BrowserRouter>
    
    <Routes>
  
    <Route path='/' element={<Home/>}/>
    
    {/* <Route path='/sucess' element={<Success/>}/> */}
     <Route path='/*' element={Error}/>
     
    </Routes>
    </BrowserRouter>
    
    )
}

export default App


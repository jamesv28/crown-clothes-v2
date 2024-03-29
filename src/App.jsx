import Directory from './components/directory/directory.component'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Home from './routes/home/hoem.component'
import Shop from './routes/shop/shop.component'
import Authentication from './routes/authentication/authentication'

import './App.scss'

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route  index element={<Home />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </div>  
  )
}

export default App

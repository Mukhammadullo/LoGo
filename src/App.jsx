import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import News from './pages/news/news'
import Portfolio from './pages/portfolio/Portfolio'

function App() {
  
const router= createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
        {
          index:true,
          element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'news',  
          element:<News></News>
        },
        {
          path:'portfolio',
          element:<Portfolio></Portfolio>
        }
      ]
    }
  ]
)

  
  return <RouterProvider router={router}></RouterProvider>
}

export default App

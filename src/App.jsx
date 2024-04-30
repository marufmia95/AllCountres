import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouot/Main';
import Secnidlayouot from './layouot/Secnidlayouot';
import Error from './layouot/pages/Error';
import Home from './layouot/pages/home/Home';
import News from './layouot/pages/news/News';
import Features from './layouot/pages/features/Features';
import Contact from './layouot/pages/contact/Contact';
import AllCountres from './layouot/pages/news/contry/AllCountres';
import Detail from './layouot/pages/news/contry/Detail';
import NewsDetail from './layouot/pages/newsDetail/NewsDetail';





function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/allcountres",
          element:<AllCountres/>,
          loader: async () => {
            return fetch("https:/restcountries.com/v3.1/all");
          }
        },
        {
          path:"/detail/code",
          element:<Detail/>,
          loader: async ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${params.code}`);
          },
    
        },
        {
          path:"/news",
          element:<News/>,
        },
        {
          path:"/news/:id",
          element:<NewsDetail></NewsDetail>,
          loader: async ({params}) => {
            return fetch(`http://localhost:3000/news/${params.id}`);
          },
        },
        {
          path:"/features",
          element:<Features></Features>,
        },
        {
          path:"/contact",
          element:<Contact></Contact>,
        },
      
   
      
      ]
    },
  
 
    {
      path: "/Secnid",
      element: <Secnidlayouot></Secnidlayouot>
    },
 
    {
      path:"*", 
      element:<Error></Error>
    }
  ]);

  return (
  <>
  <RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App

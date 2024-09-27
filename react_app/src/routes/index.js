import { lazy,Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const About = lazy(()=>import('../pages/About'))
const Home = lazy(()=>import('../pages/Home'))
const News = lazy(()=>import('../pages/Home/News'))
const Message = lazy(()=>import('../pages/Home/Message'))
const Detail = lazy(()=>import('../pages/Home/Message/Detail'))

const withLoadingComponent = (comp) => (
    <Suspense fallback={<h1>Loading...</h1>}>
      {comp}
    </Suspense>
)

const routes =  [
    {
        path:'/about',
        element:withLoadingComponent(<About/>)
    },
    {
        path:'/home',
        element:withLoadingComponent(<Home/>),
        children:[
            {
                path:'news',
                element:withLoadingComponent(<News/>)
            },
            {
                path:'message',
                element:withLoadingComponent(<Message/>),
                children:[
                    {
                        // path:'detail/:id/:title/:content',
                        path:'detail',
                        element:withLoadingComponent(<Detail/>)
                    }
                ]
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to='/about'/>
    }
]
export default routes

import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {ReactDOM} from 'react'
import router from './router/routes'
import { GlobalContextProvider } from './contexts/GlobalContext'

createRoot(document.getElementById('root')).render(

<GlobalContextProvider>

    <RouterProvider router={router}>

    </RouterProvider>
 
</GlobalContextProvider>
)

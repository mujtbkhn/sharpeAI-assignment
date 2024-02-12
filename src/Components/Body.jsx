import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Transaction from './Transaction'
import Data from './Data'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/transaction',
            element: <Transaction />
        },
        {
            path: '/data',
            element: <Data />
        },
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )


}

export default Body
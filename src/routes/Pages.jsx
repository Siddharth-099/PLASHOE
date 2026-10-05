import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Sale from '../pages/Sale';
import Collection from '../pages/Collection';
import LookBook from '../pages/LookBook';
import Contact from '../pages/Contact';
import OurStory from '../pages/OurStory';
import Foot from '../components/Foot';
import SingleProduct from '../components/SingleProduct';
import Shop from '../components/Shop';

const main = createBrowserRouter([
    {
        path: '/',
        // element: <><Navbar /> <Foot /></>,
        element: <Navbar />,
        children: [
            {
                // index: true,
                path: '/',
                element: <Home />
            },
            {
                path: '/men',
                element: <Men />
            },
            {
                path: '/women',
                element: <Women />
            },
            {
                path: '/collection',
                element: <Collection />
            },
            {
                path: '/sale',
                element: <Sale />
            },
            {
                path: '/lookbook',
                element: <LookBook />
            },
            {
                path: '/ourstory',
                element: <OurStory />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/singleproduct/:id',
                element: <SingleProduct />
            },
            {
                path: '/shop',
                element: <Shop />
            }
        ]
    }
])


const Pages = () => {
    return (
        <>
            <RouterProvider router={main}>

            </RouterProvider>
        </>
    )
}

export default Pages

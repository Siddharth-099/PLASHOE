import React, { createContext } from 'react'
import { useContext } from 'react';
// import { products, newArrivals } from '../data/products';


export const myContext = createContext();  // ==> Context Create..


const UseContext = ({ children }) => {

    const products = [
        {
            "id": 1,
            "name": "Women's Green Training",
            "category": "Women's Shoes",
            "originalPrice": 64.9,
            "price": 49.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-600x600.jpg"
        },
        {
            "id": 2,
            "name": "Women's Pedch Training",
            "category": "Women's Shoes",
            "originalPrice": 69.9,
            "price": 57.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-768x768.jpg"
        },
        {
            "id": 3,
            "name": "Men's Green Running",
            "category": "Men's Shoes",
            "originalPrice": 104.9,
            "price": 89.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg"
        },
        {
            "id": 4,
            "name": "Women's Tan Sneaker",
            "category": "Women's Shoes",
            "originalPrice": 89.9,
            "price": 80.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-600x600.jpg"
        },
        {
            "id": 5,
            "name": "Women's Pink Training",
            "category": "Women's Shoes",
            "originalPrice": 64.9,
            "price": 54.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-600x600.jpg"
        },
        {
            "id": 6,
            "name": "Women's Cream Suede",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 59.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-600x600.jpg"
        }
    ]

    const newArrivals = [
        {
            "id": 7,
            "name": "Men's Navy Running",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 104.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-600x600.jpg"
        },
        {
            "id": 8,
            "name": "Men's Green Running",
            "category": "Men's Shoes",
            "originalPrice": 104.9,
            "price": 89.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg"
        },
        {
            "id": 9,
            "name": "Women's Tan Sneaker",
            "category": "Women's Shoes",
            "originalPrice": 89.9,
            "price": 80.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-600x600.jpg"
        },
        {
            "id": 10,
            "name": "Women's Mint Sneaker",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 89.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-600x600.jpg"
        },
        {
            "id": 11,
            "name": "Women's Peach Training",
            "category": "Women's Shoes",
            "originalPrice": 69.9,
            "price": 57.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-768x768.jpg"
        },
        {
            "id": 12,
            "name": "Women's Blue Training",
            "category": "Women's Shoes",
            "originalPrice": 69.9,
            "price": 60.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-600x600.jpg"
        },
        {
            "id": 13,
            "name": "Men's Earth-Tone Sneaker",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 74.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-600x600.jpg"
        },
        {
            "id": 14,
            "name": "Men's Moonstone Sneaker",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 74.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-600x600.jpg"
        },
        {
            "id": 15,
            "name": "Women's Candy City Run",
            "category": "Women's Shoes",
            "originalPrice": 54.9,
            "price": 40.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg"
        }
    ]

    const menProducts = [
        {
            "id": 16,
            "name": "Men's Black Running",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 79.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-600x600.jpg"
        },
        {
            "id": 17,
            "name": "Men's Classic Blue",
            "category": "Men's Shoes",
            "originalPrice": 79.9,
            "price": 69.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-600x600.jpg"
        },
        {
            "id": 18,
            "name": "Men's Classic Mint",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 79.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-600x600.jpg"
        },
        {
            "id": 19,
            "name": "Men's Earth-Tone Sneaker",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 74.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-600x600.jpg"
        },
        {
            "id": 20,
            "name": "Men's Green Running",
            "category": "Men's Shoes",
            "originalPrice": 104.9,
            "price": 89.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg"
        },
        {
            "id": 21,
            "name": "Men's Moonstone Sneaker",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 74.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-600x600.jpg"
        },
        {
            "id": 22,
            "name": "Men's Navy Running",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 104.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-600x600.jpg"
        },
        {
            "id": 23,
            "name": "Men's Red Running",
            "category": "Men's Shoes",
            "originalPrice": 79.9,
            "price": 69.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-600x600.jpg"
        }
    ]

    const woMenProducts = [
        {
            "id": 24,
            "name": "Women's Blue Training",
            "category": "Women's Shoes",
            "originalPrice": 69.9,
            "price": 60.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-600x600.jpg"
        },
        {
            "id": 25,
            "name": "Women's Candy City Run",
            "category": "Women's Shoes",
            "originalPrice": 54.9,
            "price": 40.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg"
        },
        {
            "id": 26,
            "name": "Women's Choco City Run",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 64.0,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-013-600x600.jpg"
        },
        {
            "id": 27,
            "name": "Women's Cream Suede",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 59.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-600x600.jpg"
        },
        {
            "id": 28,
            "name": "Women's Green Training",
            "category": "Women's Shoes",
            "originalPrice": 64.9,
            "price": 49.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-600x600.jpg"
        },
        {
            "id": 29,
            "name": "Women's Mint Sneaker",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 89.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-600x600.jpg"
        },
        {
            "id": 30,
            "name": "Women's Orange Sneaker",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 44.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-600x600.jpg"
        },
        {
            "id": 31,
            "name": "Women's Peach Training",
            "category": "Women's Shoes",
            "originalPrice": 69.9,
            "price": 57.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-600x600.jpg"
        },
        {
            "id": 32,
            "name": "Women's Pink Suede",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 59.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-600x600.jpg"
        },
        {
            "id": 33,
            "name": "Women's Pink Training",
            "category": "Women's Shoes",
            "originalPrice": 64.9,
            "price": 54.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-600x600.jpg"
        },
        {
            "id": 34,
            "name": "Women's Tan Sneaker",
            "category": "Women's Shoes",
            "originalPrice": 89.9,
            "price": 80.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-600x600.jpg"
        },
        {
            "id": 35,
            "name": "Women's Tosca City Run",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 64.0,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-012-600x600.jpg"
        }
    ]

    const collectionProducts = [
        {
            "id": 36,
            "name": "Men's Black Running",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 79.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-600x600.jpg"
        },
        {
            "id": 37,
            "name": "Men's Classic Blue",
            "category": "Men's Shoes",
            "originalPrice": 79.9,
            "price": 69.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-600x600.jpg"
        },
        {
            "id": 38,
            "name": "Men's Classic Mint",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 79.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-600x600.jpg"
        },
        {
            "id": 39,
            "name": "Men's Earth-Tone Sneaker",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 74.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-600x600.jpg"
        },
        {
            "id": 40,
            "name": "Men's Green Running",
            "category": "Men's Shoes",
            "originalPrice": 104.9,
            "price": 89.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg"
        },
        {
            "id": 41,
            "name": "Men's Moonstone Sneaker",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 74.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-600x600.jpg"
        },
        {
            "id": 42,
            "name": "Men's Navy Running",
            "category": "Men's Shoes",
            "originalPrice": null,
            "price": 104.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-600x600.jpg"
        },
        {
            "id": 43,
            "name": "Men's Red Running",
            "category": "Men's Shoes",
            "originalPrice": 79.9,
            "price": 69.9,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-600x600.jpg"
        },
        {
            "id": 44,
            "name": "Women's Blue Training",
            "category": "Women's Shoes",
            "originalPrice": 69.9,
            "price": 60.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-768x768.jpg"
        },
        {
            "id": 45,
            "name": "Women's Candy City Run",
            "category": "Women's Shoes",
            "originalPrice": 54.9,
            "price": 40.0,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg"
        },
        {
            "id": 46,
            "name": "Women's Choco City Run",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 64.0,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-013-600x600.jpg"
        },
        {
            "id": 47,
            "name": "Women's Cream Suede",
            "category": "Women's Shoes",
            "originalPrice": null,
            "price": 59.9,
            "discount": false,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-600x600.jpg"
        }
    ]

    const look = [
        {
            "id": 1,
            "name": "Fall/Winter 2021",
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg"
        },
        {
            "id": 2,
            "name": "Spring/Summer 2021",
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg"
        },
        {
            "id": 3,
            "name": "Go & Play",
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg"
        },
        {
            "id": 4,
            "name": "Adventurer Gear",
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-1.jpg"
        }
    ]

    const sale = [
        {
            "id": 48,
            "name": "Men's Green Running",
            "originalPrice": 104.90,
            "price": 89.90,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg"
        },
        {
            "id": 49,
            "name": "Women's Tan Sneaker",
            "originalPrice": 89.90,
            "price": 80.00,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-600x600.jpg"
        },
        {
            "id": 50,
            "name": "Women's Peach Training",
            "originalPrice": 69.90,
            "price": 57.90,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-600x600.jpg"
        },
        {
            "id": 51,
            "name": "Women's Blue Training",
            "originalPrice": 69.90,
            "price": 60.00,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-600x600.jpg"
        },
        {
            "id": 52,
            "name": "Women's Candy City Run",
            "originalPrice": 54.90,
            "price": 40.00,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg"
        },
        {
            "id": 53,
            "name": "Men's Classic Blue",
            "originalPrice": 79.90,
            "price": 69.00,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg"
        },
        {
            "id": 54,
            "name": "Women's Pink Training",
            "originalPrice": 64.90,
            "price": 54.90,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-600x600.jpg"
        },
        {
            "id": 55,
            "name": "Women's Green Training",
            "originalPrice": 64.90,
            "price": 49.90,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-600x600.jpg"
        },
        {
            "id": 56,
            "name": "Men's Red Running",
            "originalPrice": 79.90,
            "price": 69.90,
            "discount": true,
            "image": "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-600x600.jpg"
        }
    ]

    return (
        <myContext.Provider value={{ products, newArrivals, menProducts, woMenProducts, collectionProducts, look, sale }}>
            {children}
        </myContext.Provider>
    )
}

export default UseContext

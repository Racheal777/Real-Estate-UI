import React from 'react'
import img from './Images/pic.jpg'
import img2 from './Images/pic2.jpg'
import img3 from './Images/pic3.jpg'
import img4 from './Images/pic4.jpg'
import img5 from './Images/pic5.jpg'

let Houses = [
    {
        "id": 1,
        "title": "1 bedroon self-contained",
        "amenities": ['1 bed', 'kitchen', 'funiture'],
        "size": 1200,
        "img": `${img}`,
        "price": 400,
        "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit`,
        "status": 'rent'
    },

    {
        "id": 5,
        "title": "2 bedroon self-contained",
        "amenities": ['2 bed', 'kitchen', 'funiture'],
        "size": 2500,
        "img": `${img2}`,
        "price": 750,
        "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit`,
        "status": 'rent'
    },

    {
        "id": 2,
        "title": "1 bedroon self-contained",
        "amenities": ['1 bed', 'kitchen', 'tv','funiture'],
        "size": 1500,
        "img": `${img3}`,
        "price": 450,
        "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit`,
        "status": 'sale'
    },

    {
        "id": 3,
        "title": "1 bedroon self-contained",
        "amenities": ['2 beds', 'kitchen', 'hall', 'funiture'],
        "size": 2400,
        "img": `${img4}`,
        "price": 800,
        "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit`,
        "status": 'rent'
    },

    {
        "id": 4,
        "title": "1 bedroon self-contained",
        "amenities": ['1 bed', 'kitchen', 'funiture'],
        "size": 1000,
        "img": `${img5}`,
        "price": 350,
        "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit`,
        "status": 'rent'
    },
]

export function Data(){
    return (Houses)
}
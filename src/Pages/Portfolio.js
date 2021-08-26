import React from 'react'
import Categories from '../Components/Categories'
import Menuitems from '../Components/Menuitems'
import Tittle from '../Components/Tittle';
import PortfoliosItem from '../Components/portfolios'
import { useState } from 'react';

const allCategorie=['All',...new Set(PortfoliosItem.map(item=>item.category))]

const Portfolio = () => {
    const [categories,setcategories]=useState(allCategorie);
    const [menuItem,setmenuItem]= useState(PortfoliosItem)
    const filter=(category)=>{
        if(category==='All'){
            setmenuItem(PortfoliosItem)
            return;

        }
        const filteredData=PortfoliosItem.filter((item)=>{
            return item.category===category;

           
        })
        setmenuItem(filteredData);

    }
    return (
        <div className="portfoliopage">
            <div className="tittle">
                <Tittle tittle={'Projects'} span={'Projects'}/>
            </div>
            <div className="projects-data">
                <Categories filter={filter} categories={categories}/>
                <Menuitems menuItems={menuItem} />

            </div>
            
            
        </div>
    )
}

export default Portfolio


import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Attack on Titans']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Attack on Titans'] );
    //     setCategories( cats => [...cats, 'Attack on Titans'] );
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            

            <ol>
                { 
                    categories.map( (category, i) => 
                        <GifGrid 
                        key={ category }
                        category={ category }
                        />
                    )
                }
            </ol>

        </>
    );

}
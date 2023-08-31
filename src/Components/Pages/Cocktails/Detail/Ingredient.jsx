import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ingredientCocktail } from '../../../../store/slices/cocktailsSlice';

const Ingredient = ({ name }) => {
    // console.log(name);
    return (
        <div>
            <>
                {
                    name && <li>
                        <Link to={`/ingredients/${name}`}>{name}</Link>
                    </li>
                }
            </>
        </div>
    );
};

export default Ingredient;
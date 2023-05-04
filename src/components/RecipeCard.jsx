import { useState } from "react";
import {  toast } from 'react-toastify';

const RecipeCard = ({chefData}) => {

    const [fold, setFold] = useState(true)
    const [isLiked, setIsLiked] = useState(false)

    const {food_image, recipe_name, cooking_method, ratings} = chefData
    const hangleFavoriteBtn = () => {
        toast("Added in Favorite")
        setIsLiked(true)
    }
    return (        
        <article className="p-4 rounded border w-full">
        <img className="w-full h-[450px] rounded object-cover" src={food_image} alt="" />
        <div className="text-center">
            <h3 className=" text-xl font-bold my-3">{recipe_name}</h3>
            <p className=" my-2"><span className="font-bold">ratings</span> : {ratings}</p>
                <button onClick={hangleFavoriteBtn } disabled={isLiked} className={` w-[150px] py-3 rounded text-white my-2 ${isLiked ? "bg-[#254f2f] cursor-not-allowed": "bg-[#289944]"}`}>{isLiked ? "Favorited" : "Favorite"}</button>
            <div className="border p-4 rounded">
            <span className="font-bold text-xl ">ingredient : </span>
            <div className="md:flex gap-3 flex-wrap">
                {
                    chefData?.ingredient && chefData.ingredient.map((ingredient, index) => <span key={index}>{ingredient}</span>)
                }
            </div>
            </div>
            <div className="my-5">
              <p> <span className="font-bold text-xl">Cooking Method :</span> {cooking_method}</p>
            </div>
           
           
        </div>
    </article>      
    );
};

export default RecipeCard;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleChefBanner from "../components/SingleChefBanner";
import RecipeCard from "../components/RecipeCard";


const ChefDetails = () => {
    const [chef, setChef] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
     fetch(`https://chafe-cafe.vercel.app/${id}`)
     .then(res => res.json())
     .then(data => setChef(data))
    },[])




    return (
        <main>
            <SingleChefBanner chef={chef}/>

            <div className="mt-[10vh] md:mt-[23vh] mb-10">
                <h3 className="text-3xl font-bold text-center mb-5">All Recipes</h3>
                <div className="md:grid grid-cols-2  gap-5 ui-container">
                    {
                      chef?.recipes &&  chef.recipes.map((chefData, index) =>  <RecipeCard key={index} chefData={chefData}/>)
                    }
                </div>
            </div>
            
        </main>
    );
};

export default ChefDetails;
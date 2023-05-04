import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";


const ChefsCard = ({chef}) => {


    const {_id, name, image, number_of_recipes, likes, experience} = chef
    return (
        <article className="p-4 rounded border">
            <div className="w-full md:flex gap-2 relative">
                
                <LazyLoad className="h-[270px] md:w-1/2" threshold={0.95}>
                    <img className="h-full w-full object-cover" src={image} alt="chefs"/>
                </LazyLoad>
                
                    
                <div className="md:w-1/2 p-3">
                  <h2 className="text-xl">{name}</h2>
                  <p className="font-bold my-2">Experience : {experience}</p>
                    <p className="font-bold my-2">Total likes : {likes}</p>
                    <p className="font-bold my-2">recipes : {number_of_recipes}</p>
                  <div className="card-actions justify-end">
                  <Link className="absolute bottom-0 right-0 py-2 px-5 rounded text-white mt-3 inline-block bg-[#289199]" to={`/chef/${_id}`}>View Recipes</Link>
                  </div>
                </div>
            </div>
        </article>
    );
};

export default ChefsCard;
import { useApiData } from "../provider/ApiDataProvider";
import ChefsCard from "./ChefsCard";


const Chefs = () => {
    const {chefs} = useApiData()
    return (
        <main className="my-[140px] ui-container" id="our-chefs">
            <h2 className="text-center text-2xl font-bold my-5">Out Best Chefs</h2>
            <section className="grid md:grid-cols-2 gap-5">
            {
                chefs.map(chef => <ChefsCard key={chef._id} chef={chef} />)
            }
        </section>
        </main>
    );
};

export default Chefs;
import LazyLoad from "react-lazy-load"
import restarunt1 from "/restarunt1.png"
import restarunt2 from "/restarunt2.png"
import restarunt3 from "/restarunt3.png"
import restarunt4 from "/restarunt4.png"
import restarunt5 from "/restarunt5.png"

const TrustedSection = () => {
    return (
        <section className=" mt-[140px]">
            <h2 className="text-3xl font-bold text-center mb-10 underline">Trusted <span className="text-[#289199]">By</span></h2>
            <div className="md:flex md:justify-between items-center gap-5 ui-container md:flex-wrap mt-12">
                <LazyLoad className="w-[150px] h-[150px] mx-auto">

                <img className="w-[200px] mt-5" src={restarunt1} alt="" />
                </LazyLoad>
                <LazyLoad className="w-[150px] h-[150px] mx-auto">

                <img className="w-[200px] mt-5" src={restarunt2} alt="" />
                </LazyLoad>
                <LazyLoad className="w-[150px] h-[150px] mx-auto">

                <img className="w-[200px] mt-5" src={restarunt3} alt="" />
                </LazyLoad>
                <LazyLoad className="w-[150px] h-[150px] mx-auto">

                <img className="w-[200px] mt-5" src={restarunt4} alt="" />
                </LazyLoad>
                <LazyLoad className="w-[150px] h-[150px] mx-auto">

                <img className="w-[200px] mt-5" src={restarunt5} alt="" />
                </LazyLoad>
            </div>
            
        </section>
    );
};

export default TrustedSection;
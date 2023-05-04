import LazyLoad from 'react-lazy-load'
import FoodCategory1 from '/foodCategory.webp'
import FoodCategory2 from '/foodCategory1.webp'
import FoodCategory3 from '/foodCategory2.webp'
import FoodCategory4 from '/foodCategory3.webp'
import FoodCategory5 from '/foodCategory4.webp'
import FoodCategory6 from '/foodCategory5.webp'

const ExploreMore = () => {
    return (

        <main className='ui-container '>
            <h1 className=' text-center text-4xl font-bold mt-16 '>EXPLORE MORE</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-2 my-5 p-5 rounded '>
                <div className='p-6 block mx-auto border relative '>
                    <LazyLoad className="w-[150px] h-[150px]">
                    <img className='w-[150px] h-[150px] ' src={FoodCategory1} alt="" />
                    </LazyLoad>
                    
                    <h3 className='p-2 text-xl text-center my-5'>QUICK & EASY</h3>
                    <button className='bg-[#289199] mx-auto py-2 w-[150px] rounded text-white absolute bottom-1'>View Details</button>
                    
                </div>
                <div  className='p-6 block mx-auto border relative '>
                    <LazyLoad className="w-[150px] h-[150px]">

                    <img className='w-[150px] h-[150px] ' src={FoodCategory2} alt="" />
                    </LazyLoad>
                    <h3 className='p-2 text-xl text-center my-5'>French fry</h3>
                    <button className='bg-[#289199] mx-auto py-2 w-[150px] rounded text-white absolute bottom-1'>View Details</button>
                   
                </div>
                <div  className='p-6 block mx-auto border relative '>
                    <LazyLoad className="w-[150px] h-[150px]">

                    <img className='w-[150px] h-[150px] ' src={FoodCategory3} alt="" />
                    </LazyLoad>
                    <h3 className='p-2 text-xl text-center my-5'>Lamb Tagine</h3>
                    <button className='bg-[#289199] mx-auto py-2 w-[150px] rounded text-white absolute bottom-1 '>View Details</button>
                    
                </div>
                <div className='p-6 block mx-auto  border relative '>
                    <LazyLoad className="w-[150px] h-[150px]">

                    <img className='w-[150px] h-[150px] ' src={FoodCategory4} alt="" />
                    </LazyLoad>
                    <h3 className='p-2 text-xl text-center my-5'>Beef burger</h3>
                    <button className='bg-[#289199] mx-auto py-2 w-[150px] rounded text-white absolute bottom-1 '>View Details</button>
                    
                </div>
                <div className='p-6 block mx-auto border relative '>
                    <LazyLoad className="w-[150px] h-[150px]">

                    <img className='w-[150px] h-[150px] ' src={FoodCategory5} alt="" />
                    </LazyLoad>
                    <h3 className='p-2 text-xl text-center my-5'>Baingan </h3>
                    <button className='bg-[#289199] mx-auto py-2 w-[150px] rounded text-white absolute bottom-1 '>View Details</button>
                    
                </div>
                <div  className='p-6 block mx-auto border relative'>
                    <LazyLoad className="w-[150px] h-[150px]">

                    <img className='w-[150px] h-[150px] ' src={FoodCategory6} alt="" />
                    </LazyLoad>
                    <h3 className='p-2 text-xl text-center my-5'>Pizza</h3>
                    <button className='bg-[#289199] mx-auto py-2  w-[150px] rounded text-white absolute bottom-1'>View Details</button>
                </div>
            </div>
        </main>
    );
};

export default ExploreMore;

import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorImg from "/error.svg"

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img className='h-[50vh]' src={errorImg} alt="" />
        <div className='max-w-md text-center'>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
            {error?.message}
          </p>
          <Link className="bg-[#289944] text-white w-full p-2 text-[21px] rounded mt-[10px]" to='/' >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function HeroCard() {
  return (
    <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-4 p-4 rounded-lg'>
                <Card bg='bg-gray-100'>
                 <h2 className='text-2xl font-bold'>For Developers</h2>
                    <p className='mt-2 mb-4'>
                        Browse our React jobs and Starts Your career today
                    </p> 
                    <Link
                        to='/jobs'
                        className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
                    >
                        Browser jobs
                    </Link>
                </Card>
                
                <Card bg='bg-indigo-100'>
                <h2 className='text-2xl font-bold'>For Employers</h2>
                    <p className='mt-2 mb-4'>
                        List your jobs to find the perfect developer for the role 
                    </p>
                    <Link
                        to='/add-job'
                        className='inline-block bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-700'
                    >
                        Add Jobs
                    </Link>
                </Card>
            </div>

        </div>

    </section>
  )
}

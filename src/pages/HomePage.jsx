import React from 'react'
import Hero from '../components/Hero'
import HeroCard from '../components/HeroCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

export default function HomePage() {
  return (
    <div>
        <Hero/>
        <HeroCard/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
    </div>
  )
}

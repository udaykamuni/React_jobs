import React from 'react'
import JobListing from './JobListing'
import {useState, useEffect} from 'react'
import Spinner from './Spinner';


export default function JobListings({isHome = false}) {
  
    const [jobs,  setJobs]= useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchJobs = async ()=>{
            const apiUrl = isHome ? '/api/jobs?_limit=3': '/api/jobs'
            try{
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            }
            catch(error){
                console.log("error in fetching", error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchJobs();
        
    },[])

  return (
    <section>
        <div className='bg-blue-50 rounded-md px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl text-indigo-500 font-bold mb-6 text-center'>
                   {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>
                
                    {loading ? (
                    <Spinner loading={loading}/>
                        ) :(
                            <div className='grid grid-cols-1 md:grid-col-3 gap-6 '>
                            {jobs.map((job)=>(
                        <JobListing key={job.id} job= {job}/>
                    ))}
                    </div>
                    
                )
                    
                    }

                
            </div>
        </div>
    </section>
  )
}

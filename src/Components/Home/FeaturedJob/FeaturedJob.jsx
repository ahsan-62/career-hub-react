import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [limitJobs, setLimitJobs] = useState(4);

    useEffect(()=>{

        fetch('jobs.json')
        .then(res => res.json())
        .then(data=>setJobs(data))

    },[]);
    return (
        <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
            <h3 className="mb-2 text-4xl font-bold">Featured Job:{jobs.length}</h3>
            <p className="text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 ">
                {
                    jobs.slice(0, limitJobs).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={limitJobs===jobs.length && 'hidden' } >
                <button className="text-center mt-16 btn btn-primary "  onClick={()=>setLimitJobs(jobs.length)} >View All Jobs</button>
            </div>

            {/* disabled={limitJobs >= jobs.length} */}
            
        </div>
    );
};

export default FeaturedJob;
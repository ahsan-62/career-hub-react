import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../../Utility/LocalStorage";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";



const Applied_jobs = () => {


    const jobs=useLoaderData();

    const [jobApplied,setJobApplied]=useState([]);

    const [displayJob,setDisplayJob]=useState([]);

    const HandleFilter=filter=>{

        if(filter==='all'){

            setDisplayJob(jobApplied);
        }
        else if(filter==='remote'){

            const remote=jobApplied.filter(job=>job.remote_or_onsite==='Remote');
            setDisplayJob(remote);
        }
        else if(filter==='onsite'){
            const onsite=jobApplied.filter(job=>job.remote_or_onsite==='Onsite');
            setDisplayJob(onsite);
        }
    }

    useEffect(()=>{

        const storedJobApplication = getStoredJobApplication();

        if(storedJobApplication.length>0){
           
            const jobApplieds=[];

            for(const id of storedJobApplication){
                const appliedJob=jobs.find(job=>job.id===id);
                if(appliedJob){
                    jobApplieds.push(appliedJob);
                }
                setJobApplied(jobApplieds);
                setDisplayJob(jobApplieds);
               
            }
            
        }
    },[jobs]);

    return (
        <div>
            <h3 className="my-24 text-3xl text-center">Applied-Jobs</h3>

            <h3>Filter Jobs</h3>

            <button className="btn btn-primary" onClick={()=>HandleFilter('all')}>All</button>

            <button className="btn btn-primary" onClick={()=>HandleFilter('remote')}>Remote</button>

            <button className="btn btn-primary" onClick={()=>HandleFilter('onsite')}>Onsite</button>
            {
                displayJob.map(job=> <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>)
            }
            
        </div>
    );
};

export default Applied_jobs;
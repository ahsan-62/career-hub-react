import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const Jobs=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);

    const job=Jobs.find(job=>job.id===idInt);
    console.log(job)
    
    console
    return (
        <div>
            <h3 className="mt-24 mb-16 text-4xl font-bold text-center">Job Details:{job.id}</h3>


        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4">
            <div className="col-span-3">
                <h3>Job Description:{job.job_description}</h3>
                <h3>Job Responsibility:{job.job_responsibility}</h3>
                <h3>Educational Requirement:</h3>
                <p>{job.educational_requirements}</p>
                <h3>Experiences:</h3>
                <p>{job.experiences}</p>
            </div>
            <div className="col-span-1">
                <h3>Job Details</h3>
                <h3>Salary:{job.salary}</h3>
                <h3>Job Title:{job.job_title}</h3>
                <h3>Contact Information</h3>
                <p>Phone:{job.contact_information.phone}</p>
                <p>Email:{job.contact_information.email}</p>
                <p>Address:{job.contact_information.address}</p>
                <button className="btn">Apply</button>
            </div>
        </div>



        </div>

        
    );
};

export default JobDetails;
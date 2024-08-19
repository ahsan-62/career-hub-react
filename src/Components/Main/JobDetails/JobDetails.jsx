import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { PiAddressBookTabsLight } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplied } from "../../../Utility/LocalStorage";

const JobDetails = () => {

    const Jobs=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);

    const job=Jobs.find(job=>job.id===idInt);
    // console.log(job)
    
    const ApplyJob = () => {
        // Retrieve previously applied jobs from local storage
        const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    
        // Check if this job has already been applied for
        if (appliedJobs.includes(job.id)) {
            toast.error("You have already applied for this job!");
            return; // Exit the function to prevent re-application
        }
    
        // Save job application if not already applied
        saveJobApplied(job.id);
    
        // Add job ID to applied jobs and update local storage
        appliedJobs.push(job.id);
        localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    
        toast.success("You have successfully applied for the job!");
        console.log("Job Applied:", job.id);
    }
    
    
  
    return (
        <div>
            <h3 className="mt-24 mb-16 text-4xl font-bold text-center">Job Details</h3>
            <hr />


        <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-4 lg:grid-cols-4">
            <div className="col-span-3">
                <h3 className="mb-3"><span className="text-xl font-extrabold text-black">Job Description: </span>{job.job_description}</h3>
                <h3 className="mb-3"><span className="text-xl font-extrabold text-black">Job Responsibility: </span>{job.job_responsibility}</h3>
                <h3 className="mb-4 text-xl font-extrabold">Educational Requirement:</h3>
                <p className="mb-3">{job.educational_requirements}</p>
                <h3 className="mb-4 text-xl font-extrabold">Experiences:</h3>
                <p>{job.experiences}</p>
            </div>
            <div className="col-span-1 p-5 border bg-custom-gradient">
                <h3 className="mb-4 text-xl font-extrabold">Job Details</h3>
                <hr className="mb-4" />
                <h3 className="text-lg font-medium  text-[#757575] mb-3"><span className="font-extrabold text-black "><RiMoneyDollarCircleLine className="inline"/> Salary: </span>{job.salary}</h3>
                <h3 className="text-lg font-medium  text-[#757575] mb-3" > <span className="font-extrabold text-black "><MdOutlineSubtitles className="inline"/> Job Title:</span>{job.job_title}</h3>
                <h3 className="mb-4 text-xl font-extrabold ">Contact Information</h3>
                <hr className="mb-4" />
                <p className="mb-3"><span className="font-extrabold text-black"><MdOutlinePhoneInTalk className="inline"/> Phone:</span>{job.contact_information.phone}</p>
                <p className="mb-3"><span className="font-extrabold text-black"> <MdEmail className="inline"/> Email:</span>{job.contact_information.email}</p>
                <p className="mb-4"><span className="font-extrabold text-black"><PiAddressBookTabsLight className="inline"/> Address:</span>{job.contact_information.address}</p>
                <ToastContainer/>
               <div className="text-center">
               <button onClick={ApplyJob}  className="p-3 font-bold bg-orange-500 rounded-lg text-md">Apply Now</button>
               </div>
            </div>
        </div>
        </div>

        
    );
};

export default JobDetails;
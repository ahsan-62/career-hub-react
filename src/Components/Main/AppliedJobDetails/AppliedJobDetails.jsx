import { MdLocationPin } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
const AppliedJobDetails = ({job}) => {

    console.log(job);
    return (

        <div className="grid grid-cols-4 p-8 shadow-2xl shadow-stone-400 opacity-90 rounded-xl">
       <div className="col-span-1">
       <img className="mb-4" src={job.logo} alt="" />
       </div>
        <div className="col-span-2" >
        <h3 className="mb-2 text-2xl font-extrabold ">{job.job_title}</h3>
        <h4 className="mb-2 text-xl font-semibold">{job.company_name}</h4>
        <div className="flex gap-4 mb-2">
            <h3 className="p-1 text-base font-extrabold text-indigo-600 border border-indigo-600 border-solid rounded-sm border-inherit">{job.remote_or_onsite}</h3>
            <h3 className="p-1 text-base font-extrabold text-indigo-600 border border-indigo-600 border-solid rounded-sm border-inherit">{job.job_type}</h3>
        </div>

        <div className="flex gap-8 mb-5">
            <h1 className="text-xl font-semibold"><MdLocationPin className="inline" /> {job.location}</h1>
            <h1 className="text-xl font-semibold"> <TbMoneybag className="inline" /> Salary:{job.salary}</h1>
        </div>
        </div>
        
       <div className="items-end col-span-1 text-right content-evenly">
       <Link to={`/job-details/${job.id}`}>
       <button className="btn btn-primary">View Details</button>
       </Link>
       </div>
    </div>
    );
};


AppliedJobDetails.propTypes = {
    job: propTypes.object
}
export default AppliedJobDetails;
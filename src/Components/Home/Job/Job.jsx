import { MdLocationPin } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    return (
        <div className="p-8 shadow-stone-400 opacity-90  shadow-2xl rounded-xl">
            <img className="mb-4" src={job.logo} alt="" />
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
           <Link to={`/job-details/${job.id}`}>
           <button className="btn btn-primary">View Details</button>
           </Link>
        </div>
    );
};

Job.propTypes = {
    job: propTypes.object   
}

export default Job;
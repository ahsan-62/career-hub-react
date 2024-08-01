import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h3 className="text-2xl text-center text-red-600 ">Page Not Found</h3>
            <Link to="/">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;
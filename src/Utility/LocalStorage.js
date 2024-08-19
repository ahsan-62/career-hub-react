const getStoredJobApplication = () => {
  const jobApplied = localStorage.getItem("jobApplication");
  //   return jobApplied ? JSON.parse(jobApplied) : [];
  if (jobApplied) {
    return JSON.parse(jobApplied);
  }
  return [];
};

const saveJobApplied = (id) => {
  const storedJobApplication = getStoredJobApplication();
  const exist = storedJobApplication.find((job) => job.id === id);
  if (!exist) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "jobApplication",
      JSON.stringify(storedJobApplication)
    );
  }
};

export { getStoredJobApplication, saveJobApplied };

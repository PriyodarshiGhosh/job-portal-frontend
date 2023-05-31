import { useState } from "react";
import useCreateJobView from "./views/useCreateJob";
export default function CreateJob(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const {handleSubmit}=useCreateJobView(title,description,location,salary);
    return (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mt-8">Create a Job Posting</h1>
          <form onSubmit={handleSubmit} 
           className="bg-white p-6 rounded-lg shadow-md"
           style={{
             position: 'absolute',
             top: '160px',
             left: '442px',
             width: '557px',
             height: '480px',
             borderRadius: '20px',
             boxShadow: '0px 30px 36px #557DA526',
             opacity: 1,
           }}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                Title
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                placeholder="Enter your title here"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
               Description
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Enter your description here"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                Location
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                placeholder="Enter your location here"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
                Salary
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="salary"
                placeholder="Enter your salary here"
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      );
}
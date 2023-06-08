import { useState } from "react";
import useCreateJobView from "./views/useCreateJob";

const CreateJob = () => {
  const {  handleSubmit,
    error,
    handleErrorChange,
    title, description, location, salary,setTitle,setDescription,setLocation,setSalary,handleFormSubmit} = useCreateJobView();

  
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-8">Create a Job Posting</h1>
      <form onSubmit={handleFormSubmit} 
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
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            placeholder="Enter your title here"
            value={title}
            onChange={(event) => {if(error?.title){
              handleErrorChange('title')
              
            }
            setTitle(event.target.value)
          }
            
            }
          />
          {error?.title?.length ? (<p className='text-red-600'>{error?.title}</p>):null  }
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
            onChange={(event) => {if(error?.description){
              handleErrorChange('description')
              
            }
            setDescription(event.target.value)
          }}
          />
          {error?.description?.length ? (<p className='text-red-600'>{error?.description}</p>):null  }
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            placeholder="Enter your location here"
            value={location}
            onChange={(event) => {if(error?.location){
              handleErrorChange('location')
              
            }
            setLocation(event.target.value)
          }}
          />
          {error?.location?.length ? (<p className='text-red-600'>{error?.location}</p>):null  }
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
            Salary
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="salary"
            placeholder="Enter your salary here"
            value={salary}
            onChange={(event) => {if(error?.salary){
              handleErrorChange('salary')
              
            }
            setSalary(event.target.value)
          }}
          />
          {error?.salary?.length ? (<p className='text-red-600'>{error?.salary}</p>):null  }
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={Object.keys(error)?.length > 0}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateJob;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostInfo() {
   const  navigate =useNavigate()
   
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [Date, setDate] = useState("");
  const [Subjects, setSubjects] = useState([]);
  const [rating, setRating] = useState("");



  const ratingfun = (value)=>{
        if (value >=0 && value<11) {
            setRating(value)
        }else{
            alert("dot input more than 10 ro minus number")
        }
  }


  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
        setSubjects([...Subjects, value]);
    } else {
        setSubjects(Subjects.filter(subject => subject !== value));
    }
  };


  const submitData =async (e)=>{
    e.preventDefault()
    const obj = {
        name,university,Date,rating,Subjects
    }

    console.log(obj)
    try {
        const response = await axios.post("user/addData",obj)
        if(response.data.success){
            alert("data updated")
          
            navigate('/table')
        }


    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <h1 className="text-black text-center text-3xl font-bold mt-9">
        Update University
      </h1>
      <div className="flex justify-center p-12 items-center">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                University Name
              </label>
              <input
                name="university"
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="Enter University Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-black"
                  >
                    Date of Birth
                  </label>
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Providing Subjects
              </label>

              <input type="checkbox" onChange={handleCheckboxChange} value="maths"/>
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-9"
              >
                maths
              </label>

              <input type="checkbox"    onChange={handleCheckboxChange} value="Science" />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-9"
             
              >
                Science
              </label>

              <input type="checkbox"  onChange={handleCheckboxChange} value="Computer"/>
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-9"
               
              >
                Computer
              </label>

              <input type="checkbox"   onChange={handleCheckboxChange} value="Physics"/>
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-9"
              
              >
                Physics
              </label>

              <input type="checkbox"    onChange={handleCheckboxChange} value="Chemistry"/>
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-9"
             
              >
                Chemistry
              </label>

              <input type="checkbox" onChange={handleCheckboxChange} value=" Biology" />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-9"
                
              >
                Biology
              </label>

              <input type="checkbox" onChange={handleCheckboxChange} value="English"/>
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-9"
              >
                English
              </label>

              <input type="checkbox" onChange={handleCheckboxChange} value="Economics" />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-9"
              >
                Economics
              </label>

              <input type="checkbox" onChange={handleCheckboxChange} value="History"/>
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 me-9"
              >
                History
              </label>

              <input type="checkbox" onChange={handleCheckboxChange} value="others" />
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                others
              </label>

              <div className="my-5 pt-3">
                <span className="text-2xl">Rating:- </span>
                <input
                  type="number"
                  onChange={(e) => ratingfun(e.target.value)}
                  className="w-7 mx-2 border border-gray-300"
                  required
                />
                / 10
              </div>
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-purple-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              onClick={(e)=>submitData(e)}
              >
                Submit Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostInfo;

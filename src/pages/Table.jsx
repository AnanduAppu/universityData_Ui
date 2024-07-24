import axios from "axios";
import React, { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState([]);
  const [Datamod,setDataMod]= useState([])

  const filterdata = (e)=>{
    const filteredData = data.filter((ele)=>ele.University. toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(filteredData)
    setDataMod(filteredData)

  }

  useEffect(() => {
    const fetchData = async () => {
       
      try {
        const response = await axios.get("user/getData");
        if (response.data.success) {
          setData(response.data.Data);
          setDataMod(response.data.Data)
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-black text-center text-4x1 font-bold my-7">
        All DATAS
      </h1>
      <input
        type="text"
        onChange={filterdata}
        placeholder="search university"
        className="border border-gray-300 w-96 rounded-lg ms-10 mb-7 h-8 ps-1"
      />
      <button className="px-2 py-1 border border-black rounded-lg ms-1">
        Search
      </button>
      <div className="mx-5">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-green-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  University name
                </th>
                <th scope="col" className="px-6 py-3">
                  Your Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Subjets
                </th>
                <th scope="col" className="px-6 py-3">
                 D-O-B
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
                {data&&Datamod.map((ele)=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                     {ele.University}
                    </th>
                    <td className="px-6 py-4">{ele.name}</td>
                    <td className="px-6 py-4">
                      <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {ele.Subjects.map((ele)=>(
                         <option selected>{ele}</option>
                        ))}
                
                      </select>
                    </td>
                    <td className="px-6 py-4">{ele.DOB}</td>
                    <td className="px-6 py-4">{ele.rating}/10</td>
                  </tr>
                ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;

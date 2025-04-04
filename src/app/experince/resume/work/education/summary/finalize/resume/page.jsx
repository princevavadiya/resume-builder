"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";





export default function ResumeBuildPage() {
  const router = useRouter();



  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [surName, setSurName] = useState()
  const [phone, setPhone] = useState()
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [summary, setSummary] = useState("")

  const [experience, setExperience] = useState()
  const [selectedText, setSelectedText] = useState("")
  const [schoolName, setSchoolName] = useState("")
  const [schoolLocation, setSchoolLocation] = useState("")
  const [degree, setDegree] = useState("")
  const [fieldOfStudy, setFieldOfStudy] = useState()
  const [gradMonth, setGradMonth] = useState("")
  const [gradYear, setGradYear] = useState("")
  const [data, setData] = useState({});


  useEffect(() => {
    setFirstName(localStorage.getItem("firstName") || "");
    setEmail(localStorage.getItem("email") || "");
    setSurName(localStorage.getItem("surName") || "");
    setPhone(localStorage.getItem("phone") || "");
    setCity(localStorage.getItem("city") || "");
    setCountry(localStorage.getItem("country") || "")
    setSummary(localStorage.getItem("summary") || "");

    setExperience(localStorage.getItem("experience") || "");
    setSelectedText(localStorage.getItem("selectedText") || "");
    setSchoolName(localStorage.getItem("schoolName") || "")
    setSchoolLocation(localStorage.getItem("schoolLocation") || "");
    setDegree(localStorage.getItem("degree") || "");
    setFieldOfStudy(localStorage.getItem("fieldOfStudy") || "");
    setGradMonth(localStorage.getItem("gradMonth") || "");
    setGradYear(localStorage.getItem("gradYear") || "");


  }, []);


  useEffect(() => {
    // Get data from localStorage
    const storedData = localStorage.getItem("formData");

    if (storedData) {
      setData(JSON.parse(storedData));

      console.log(storedData);
    }
  }, []);


  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-white px-6 py-10 shadow-blue-700 uppercase ">
      {/* Resume Card */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-purple-700 text-white text-center (py-6 px-4">
          <h1 className="text-3xl font-bold">{firstName.toUpperCase()} {surName} </h1>
          <p className="text-sm mt-1">{city}, {country}  | {phone}</p>
          <p className="text-sm">{email}</p>
        </div>

        {/* Summary */}
        <div className="p-6 bg-purple-700 text-white">
          <p className="text-sm leading-relaxed">{summary}</p>
        </div>

        {/* Skills Section */}
        <div className="p-4 bg-gray-100 shadow-md rounded-lg">
          <div className="text-black ">
            <div className="font-extrabold">
              Skills
            </div>
            <div className="mt-3 flex">
              <div className="font-bold pr-2">

                backEnd Languages:
              </div>
              <div>
                {data.backEndLanguages}
              </div>

            </div><div className="mt-2 flex">

              <div className="font-bold pr-2">
                frontEndLanguages:
              </div>
              <div>{data.frontEndLanguages}</div>
            </div>

            <div className=" mt-3">


              <div className="flex">

                <h2 className="font-bold">Languages:</h2>
                <p>{data.languages}</p>


              </div>



            </div></div>


          <div className="text-black">

            <div className="font-extrabold mt-3">Education</div>
            <div>{schoolName}</div>
            <div>{schoolLocation}</div>

          </div>


          <div className="text-black">

            <div className="font-extrabold">College</div>
            <div>{degree} engineering</div>
            <div>Course: {fieldOfStudy}</div>
            <div>{gradMonth} ,{gradYear}</div>

          </div>



        </div>



        {/* Professional Experience */}
        <div className="p-6 border-t bg-white text-gray-900">
          <h2 className="text-xl font-semibold text-purple-700">Experience : {experience}  </h2>

          <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
            <li>{selectedText}</li>
          </ul>
          <div>{data.customSection}</div>
          <div>
            {data.websiteLink ?
              <div>
                <div className="font-bold">Websites && Portfolios && Profiles Links</div>
                <a href={data.websiteLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
                  {data.websiteLink}
                </a>
              </div> : null
            }
          </div>

        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mt-6 px-6 py-1 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        Back
      </button>
    </div >
  );
}

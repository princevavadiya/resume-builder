"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ResumeBuilder() {
  const router = useRouter();
  const [selectedText, setSelectedText] = useState("Conducted system analysis and testing to identify and resolve technical issues or inefficiencies.Adept at designing, developing, and optimizing solutions to complex engineering challenges with efficiency and scalability in mind.");

  const suggestions = [
    "Achieved cost-savings by developing functional solutions to problems.Proficient in industry-standard tools, frameworks, and programming languages , with hands-on experience in system architecture and software development.",
    "Worked successfully with diverse group of coworkers to accomplish goals and address issues related to our products and services. Strong ability to work in cross-functional teams, communicate technical concepts effectively, and contribute to high-impact projects.",
    "Completed day-to-day duties accurately and efficiently.Passionate about staying up to date with emerging technologies, industry best practices, and advancements to drive innovation.Experienced in managing projects from ideation to deployment, ensuring timely delivery, quality standards, and alignment with business goals."
  ];

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName") || "");
    setEmail(localStorage.getItem("email") || "");
  }, []);



  const { handleSubmit, register, formState: { errors }, watch } = useForm()


  const onSubmit = () => {
    router.push(`/experince/resume/work/education`);
  };
  useEffect(() => {
    localStorage.setItem("selectedText  ", selectedText);
  }, watch["selectedText"])



  return (
    <form className="min-h-screen p-8 bg-gradient-to-br from-gray-600 to-gray-200" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold">Next, write about what you did</h1>
      <p className="text-gray-100">Pick from our ready-to-use phrases or write your own and get AI writing help.</p>

      <div className="grid grid-cols-3 gap-4 mt-6 ">
        {/* Search & Suggestions */}
        <div className="bg-white p-4 shadow-md rounded-lg bg-gradient-to-tr from-orange-700 to-orange-300">
          <input type="text" placeholder="Job title, industry, or keyword" className="w-full p-2 border rounded-md" />
          <div className="mt-4">
            {suggestions.map((text, index) => (
              <button key={index} onClick={() => setSelectedText(text)} className="block w-full text-left p-2 text-white  {selectedText === text ? 'bg-gray-200' : ''} border-b hover:bg-black" {...register("selectedText")} >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* AI-Enhanced Editor */}
        <div className="bg-white p-4 shadow-md rounded-lg bg-gradient-to-br from-sky-800 to-sky-200">
          <div className="flex gap-2 mb-2">
            <div className="font-bold cursor-pointer ">U</div>
            <div className="italic cursor-pointer ">I</div>
            <div className="underline cursor-pointer ">L</div>
            <div className="text-blue-600 cursor-pointer ">🔄</div>
          </div>
          <textarea
            className="w-full h-40 p-2 border rounded-md"
            value={selectedText}
            onChange={(e) => setSelectedText(e.target.value)}
          ></textarea>
          <button className="mt-2 px-4 py-2 bg-yellow-400 rounded-lg" disabled>✨ Enhance with AI</button>
        </div>

        {/* Resume Preview */}
        <div className=" p-4 shadow-md rounded-lg bg-gradient-to-br from-green-900 to-green-400">
          <h2 className="text-lg font-semibold text-white">{firstName}</h2>
          <p className="text-sm text-gray-100">Email: {email}</p>
          <h3 className="mt-4 font-extrabold text-white">Experience</h3>
          <p className="text-sm text-white" {...register("selectedText")} >{selectedText}</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 bg-gray-300 rounded-lg" onClick={() => router.back()} >Back</button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Continue</button>
      </div>
    </form>
  );
}
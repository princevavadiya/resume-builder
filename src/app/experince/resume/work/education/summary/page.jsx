"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

export default function SummaryPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("Volunteer");
  const [selectedRole, setSelectedRole] = useState("Volunteer");
  const { register, handleSubmit, formState: { errors }, watch } = useForm();


  // Pre-defined summaries for different volunteer roles
  const summaries = {
    "Volunteer": "Energetic Volunteer offering outstanding telephone etiquette, social media, and interpersonal skills. Well-trained individual with past experience working with children and elderly people. Punctual and dedicated to service.",
    "Student Worker": "Dedicated Student Worker with experience in administrative support, customer service, and event coordination. Strong organizational skills with a passion for teamwork.",
    "Community Service Volunteer": "Compassionate Community Service Volunteer with hands-on experience in food drives, shelter assistance, and public outreach programs. Dedicated to improving local communities.",
    "Hospital Volunteer": "Caring Hospital Volunteer with experience in patient assistance, visitor guidance, and administrative tasks. Passionate about providing a comforting environment.",
    "Church Volunteer": "Engaged Church Volunteer assisting in worship services, community outreach, and event organization. Strong sense of commitment and faith-driven service.",
    "Library Volunteer": "Detail-oriented Library Volunteer experienced in book cataloging, helping visitors, and organizing reading programs. Passionate about literacy and education."
  };

  const onSubmit = (data) => {
    console.log("Education Data:", data);
    router.push(`/experince/resume/work/education/summary/finalize`); // Replace with actual next page route
  };


  useEffect(() => (
    localStorage.setItem("summary", summaries[selectedRole])
  ), watch["summaries[selectedRole]"])


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-800 to-indigo-100 px-8 py-10">
      {/* Header */}
      <div className="text-left w-full max-w-4xl">
        <h1 className="text-3xl font-bold">Briefly tell us about your background</h1>
        <p className=" mt-2 text-white">
          Choose from our pre-written examples below or write your own.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl flex mt-6 gap-6 ">
        {/* Left Column: Job Title Search */}
        <div className="w-1/2  shadow-md rounded-lg p-4 bg-gradient-to-br from-slate-700 to-slate-200 ">
          <div className="relative ">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by job title"
              className="w-full border rounded-md p-2 pl-10"
            />
            <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          </div>

          {/* Related Job Titles */}
          <div className="mt-4 text-sm text-blue-600">
            <p className="font-medium text-white">Related Job Titles</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {Object.keys(summaries).map((role) => (
                <span
                  key={role}
                  className={`cursor-pointer px-2 py-1 rounded-md bg-gradient-to-br from-blue-800 to-blue-300 ${selectedRole === role ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
                  onClick={() => setSelectedRole(role)}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Summary Editor */}
        <div className="w-1/2">
          {/* Summary Text Area */}
          <textarea
            className="w-full border rounded-md p-3 h-40 text-sm leading-6 bg-gradient-to-br from-blue-950 to-blue-300 text-white"
            value={summaries[selectedRole]}
            readOnly
            {...register("summaries[selectedRole]")}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-4xl mt-6">
        <Button variant="outline" onClick={() => router.back()}>Back</Button>
        <Button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700" onClick={() => router.push("/extra-sections")}>
          Next
        </Button>
      </div>
    </form>
  );
}

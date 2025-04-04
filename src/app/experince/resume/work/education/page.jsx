"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function EducationForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const [degree, setDegree] = useState("");

  const onSubmit = (data) => {
    console.log("Education Data:", data);
    router.push(`/experince/resume/work/education/summary`); // Replace with actual next page route
  };

  useEffect(() => {

    const subscription = watch((value) => {
      localStorage.setItem("schoolName", value.schoolName || "");
      localStorage.setItem("schoolLocation", value.schoolLocation || "");
      localStorage.setItem("degree", value.degree || "");
      localStorage.setItem("fieldOfStudy", value.fieldOfStudy || "");
      localStorage.setItem("gradMonth", value.gradMonth || "");
      localStorage.setItem("gradYear", value.gradYear || "");
    });


    return () => subscription.unsubscribe();
  }, [watch]);


  return (
    <div className="min-h-screen flex flex-col items-center bg-white  px-8 py-10 bg-gradient-to-br to-neutral-800 from-zinc-200 text-gray-900">
      <div className="text-left w-full max-w-3xl">
        <h1 className="text-3xl font-bold">Tell us about your education</h1>
        <p className="text-gray-600 mt-2">
          Enter your education experience so far, even if you are a current student or did not graduate.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mt-6 bg-gradient-to-br from-gray-800 to-gray-300 text-white">
        {/* School Name & Location */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">SCHOOL NAME *</label>
            <input
              type="text"
              placeholder="Enter your school name"
              {...register("schoolName", { required: "School name is required" })}
              className="w-full border rounded-md p-2 mt-1"
            />
            {errors.schoolName && <p className="text-red-500 text-xs mt-1">{errors.schoolName.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">SCHOOL LOCATION</label>
            <input
              type="text"
              placeholder="e.g. New Delhi, India"
              {...register("schoolLocation", { required: "School Location is required" })}
              className="w-full border rounded-md p-2 mt-1"
            />
            {errors.schoolLocation && <p className="text-red-500 text-xs mt-1">{errors.schoolLocation.message}</p>}
          </div>
        </div>

        {/* Degree Selection */}
        <div className="mt-4 text-black">
          <label className="text-sm font-medium text-white">DEGREE</label>
          <select
            {...register("degree")}
            className="w-full border rounded-md p-2 mt-1 bg-white"
            onChange={(e) => setDegree(e.target.value)}
          >
            <option value="">Select</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="phd">Ph.D</option>
          </select>
        </div>

        {/* Field of Study & Graduation Date */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">FIELD OF STUDY</label>
            <input
              type="text"
              placeholder="e.g. Financial Accounting"
              {...register("fieldOfStudy", { required: "fieldOfStudy is required" })}
              className="w-full border rounded-md p-2 mt-1"
            />
            {errors.fieldOfStudy && <p className="text-red-500 text-xs mt-1">{errors.fieldOfStudy.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-medium text-black">GRADUATION DATE</label>
              <select {...register("gradMonth")} className="w-full border rounded-md p-2 mt-1 bg-white text-black">
                <option value="">Month</option>
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-black">YEAR</label>
              <select {...register("gradYear")} className="w-full border rounded-md p-2 mt-1 bg-white text-black">
                <option value="">Year</option>
                {[...Array(50)].map((_, index) => {
                  const year = new Date().getFullYear() - index + 10;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>
            </div>
          </div>
        </div>

        {/* Additional Coursework Section */}
        <div className="mt-6 border rounded-lg p-4 bg-gray-100">
          <label className="flex items-center text-sm font-medium text-black">
            <input type="checkbox" {...register("additionalCoursework")} className="mr-2 text-black" />
            Add any additional coursework you're proud to showcase
          </label>
          <div className="mt-2 text-xs flex items-start text-blue-600">
            <Info className="w-5 h-5 mr-2" />
            <p>
              If your bachelor's degree is in progress, you can include international exchange, educational achievements,
              or any certification that corresponds to your desired job. An above-average grade, rank, or CGPA (8.0 or higher)
              would be good to add too.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 text-black">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Back
          </Button>
          <Button type="submit" className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

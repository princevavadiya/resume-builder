"use client";
import { Button } from "@/components/ui/button";
import {  useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ExperienceSelection() {
  const [selected, setSelected] = useState();
  const router = useRouter();
  
  const experiences = ["No experience", "Entry-level", "Mid-level", "Senior"];


  const {
    register,
    handleSubmit,
    formState: { errors }, watch
  } = useForm({
    resolver: zodResolver(

    ),
  
  });
  useEffect(() => {
    localStorage.setItem("experience", selected);
  }, [watch("selected")]);

  const onSubmit = () => {

    console.log(selected);

    router.push(`/experince/resume`);

  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-pink-500 text-gray-900 p-10">
      {/* Header */}
      <div className="text-center mb-6">
        <Briefcase size={40} className="text-blue-950 mx-auto" />
        <h1 className="text-3xl font-bold mt-2">How much work experience do you have?</h1>
        <p className="text-gray-100 mt-2">We can give you better advice and guidance if we know.</p>
      </div>

      {/* Experience Options */}
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
        {experiences.map((experience, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelected(experience)}
            value={selected}
            className={`px-6 py-3 border rounded-lg font-medium transition-all text-lg ${selected === experience ? "bg-gray-900 text-white" : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }   `}
            {...register("selected")}
          >
            {experience}
          </button>
        ))}
      </form>

      {/* Continue Button */}
      <Button type="submit"
        onClick={onSubmit}
        disabled={!selected}
        className={`mt-6 px-6 py-3 text-lg rounded-full shadow-md ${selected ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
      >
        Continue
      </Button>

      {/* Footer */}
      <footer className="mt-16 text-gray-100 text-sm text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <p className="mt-2">© 2025, NOW Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}

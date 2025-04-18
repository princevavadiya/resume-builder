"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Upload, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"; // Import zod

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  surName: z.string().min(1, "Surname is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  pincode: z.string().min(1, "Pin Code is required"),
});

export default function HeaderSection() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(formSchema)
    
  });

  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };


  useEffect(() => {

    const subscription = watch((value) => {
      localStorage.setItem("firstName", value.firstName || "");
      localStorage.setItem("surName", value.surName || "");
      localStorage.setItem("email", value.email || "");
      localStorage.setItem("phone", value.phone || "");
      localStorage.setItem("city", value.city || "");
      localStorage.setItem("country", value.country || "");
      localStorage.setItem("pincode", value.pincode || "");
    });


    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    router.push(
      `/experince/resume/work`
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-bl to-sky-800 from-indigo-100 px-8 py-10">
      {/* Header */}
      <div className="text-left w-full max-w-3xl">
        <h1 className="text-3xl font-bold">Lets start with your header</h1>
        <p className="text-black mt-2">
          Include your full name and at least one way for employers to reach you.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl bg-gradient-to-br from-blue-950 to-gray-200 shadow-lg rounded-lg p-6 mt-6">
        {/* Profile Photo Upload */}
        <div className="flex items-center space-x-4">
          <label className="w-24 h-24 border-2 border-dashed rounded-full flex items-center justify-center cursor-pointer relative">
            {photo ? (
              <img src={photo} alt="Profile" className="w-full h-full object-cover rounded-full" />
            ) : (
              <User className="text-gray-400" size={40} />
            )}
            <input type="file" className="hidden" onChange={handlePhotoUpload} accept="image/*" />
          </label>
          <Button variant="outline" className="flex items-center space-x-2">
            <Upload size={16} />
            <span>Add a photo</span>
          </Button>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="text-sm font-medium text-white" >First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              {...register("firstName")}
              className="w-full border rounded-md p-2 mt-1"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-white">surname</label>
            <input
              type="text"
              placeholder="Enter your surname"
              {...register("surName")}
              className="w-full border rounded-md p-2 mt-1"
            />
            {errors.surName && <p className="text-red-500 text-xs mt-1">{errors.surname.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-white">City</label>
            <input type="text" placeholder="New Delhi" {...register("city")} className="w-full border rounded-md p-2 mt-1 bg-gray-100" />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Country</label>
            <input type="text" placeholder="India" {...register("country")} className="w-full border rounded-md p-2 mt-1 bg-gray-100" />
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Pin Code</label>
            <input type="text" placeholder="110034" {...register("pincode")} className="w-full border rounded-md p-2 mt-1 bg-gray-100" />
            {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Phone</label>
            <input type="tel" placeholder="+91 11 1234 5677" {...register("phone")} className="w-full border rounded-md p-2 mt-1 bg-gray-100" />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" placeholder="Enter your email" {...register("email")} className="w-full border rounded-md p-2 mt-1 bg-gray-100" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Back
          </Button>
          <Button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

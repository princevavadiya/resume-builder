import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, Clock, Briefcase } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center p-10 bg-gradient-to-tl from-orange-700 to-yellow-300">
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold leading-tight">
          Create a resume that <span className="underline decoration-green-400">gets results</span>
        </h1>
        <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Link href="/getstarted">
            <Button className="mt-6 px-6 py-3 text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md">
              Choose a template
            </Button>
          </Link>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {[
          { icon: <Camera className="text-green-500" size={40} />, title: "Recruiter-Approved Resume", desc: "We work with recruiters to design resume templates that format automatically." },
          { icon: <Clock className="text-blue-500" size={40} />, title: "Finish Your Resume in 15 Minutes", desc: "Resume Now helps you tackle your work experience by reminding you what you did at your job." },
          { icon: <Briefcase className="text-yellow-500" size={40} />, title: "Land an Interview", desc: "We suggest the skills you should add. It helped over a million people get interviews." },
        ].map((feature, index) => (
          <Card key={index} className="p-6 shadow-lg border border-gray-200 text-center bg-gradient-to-br from-neutral-800 to-zinc-300">
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="bg-gray-100 p-3 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-100">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

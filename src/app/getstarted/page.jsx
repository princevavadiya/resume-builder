import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, Edit, Monitor } from "lucide-react";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br to-neutral-800 from-zinc-200 text-gray-900 flex flex-col items-center p-10">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold">Here's what you need to know</h1>
      </header>

      {/* Steps Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl text-center">
        {[
          { icon: <FileText className="text-green-500" size={50} />, title: "Step 1", desc: "Check out our pre-designed templates and guided steps to create a polished resume faster." },
          { icon: <Edit className="text-blue-500" size={50} />, title: "Step 2", desc: "Find the right words to describe your job and skills with our AI-powered suggestions." },
          { icon: <Monitor className="text-yellow-500" size={50} />, title: "Step 3", desc: "Fine-tune your details, generate each section, and download your resume instantly." },
        ].map((step, index) => (
          <Card key={index} className="p-6 shadow-lg border border-gray-200 bg-gradient-to-br from-gray-700 to-gray-200">
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="bg-gray-100 p-3 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-black">{step.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>


      <div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} className="mt-8">
        <Link href="/experince" className="text-blue-600 hover:underline">
          <Button className="px-6 py-3 text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md">
            Continue
          </Button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-100 text-sm text-center">
        <p>© 2025, NOW Limited. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Accessibility</a>
        </div>
      </footer>
    </div>
  );
}
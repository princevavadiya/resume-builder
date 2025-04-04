"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function ExtraSections() {
  const router = useRouter();

  // State for predefined sections
  const [sections, setSections] = useState({
    "Websites, Portfolios, Profiles": false,
    "Languages": false,
    "frontEndLanguages": false,
    "backEndLanguages": false,
  });

  // State for form data
  const [formData, setFormData] = useState({
    websiteLink: "",
    languages: "",
    frontEndLanguages: "",
    backEndLanguages: "",
    customSection: "",
  });

  // Custom section state
  const [customSectionChecked, setCustomSectionChecked] = useState(false);





  // Toggle section selection
  const handleToggle = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle input change for dynamic fields
  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    router.push(`/experince/resume/work/education/summary/finalize/resume`);
  };

  return (
    <form onSubmit={onSubmit} className="min-h-screen flex flex-col items-center bg-gradient-to-br from-teal-800 to-teal-100  px-8 py-10">
      <div className="text-left w-full max-w-4xl">
        <h1 className="text-3xl font-bold">Do you have anything else to add?</h1>
        <p className=" mt-2 text-white">These sections are optional.</p>
      </div>

      <div className="w-full max-w-4xl mt-6 bg-gray-100 shadow-md rounded-lg p-4 bg-gradient-to-br from-cyan-950 to-cyan-100 text-white">
        {Object.keys(sections).map((section) => (
          <div key={section} className="flex items-center space-x-2 mb-3">
            <Checkbox
              checked={sections[section]}
              onCheckedChange={() => handleToggle(section)}
            />
            <span className="">{section}</span>
          </div>
        ))}

        {sections["Websites, Portfolios, Profiles"] && (
          <div className="mt-3">
            <Input
              value={formData.websiteLink}
              onChange={(e) => handleInputChange(e, "websiteLink")}
              placeholder="Enter website or portfolio link"
              className="w-full text-white"
            />
          </div>
        )}

        {sections["Languages"] && (
          <div className="mt-3">
            <Input
              value={formData.languages}
              onChange={(e) => handleInputChange(e, "languages")}
              placeholder="Enter languages you speak"
              className="w-full text-white"
            />
          </div>
        )}

        {sections["frontEndLanguages"] && (
          <div className="mt-3 text-white">
            <Input
              value={formData.frontEndLanguages}
              onChange={(e) => handleInputChange(e, "frontEndLanguages")}
              placeholder="Enter your frontEnd Languages"
              className="w-full text-white"
            />
          </div>
        )}

        {sections["backEndLanguages"] && (
          <div className="mt-3 text-white">
            <Input
              value={formData.backEndLanguages}
              onChange={(e) => handleInputChange(e, "backEndLanguages")}
              placeholder="Enter Back End Languages"
              className="w-full text-white"
            />
          </div>
        )}

        {/* Custom Section */}
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox
            checked={customSectionChecked}
            onCheckedChange={() => setCustomSectionChecked(!customSectionChecked)}
          />
          <Input
            value={formData.customSection}
            onChange={(e) => handleInputChange(e, "customSection")}
            placeholder="Add your own"
            className="w-full text-white"
            disabled={!customSectionChecked}

          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-4xl mt-6">
        <Button variant="outline" onClick={() => router.back()}>Preview</Button>
        <Button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700" type="submit">
          Next
        </Button>
      </div>
    </form>
  );
}

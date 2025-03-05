"use client";

import { useForm } from "react-hook-form";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"; // Ensure this exists in your project

export default function JoinusPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Logs data to console only — no storage or backend logic
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      {/* Add margin to push form below the NavBar */}
      <div className="flex flex-col items-center justify-center py-12 px-6 lg:px-8 mt-20">
        <h1 className="text-3xl font-bold mb-6">Join Us</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <Input
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            <p className="text-red-500 text-sm mt-1"></p>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            <p className="text-red-500 text-sm mt-1"></p>
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block mb-1 font-medium">Join As</label>
            <select
              className="border rounded p-2 w-full"
              {...register("role", { required: "Please select a role" })}
            >
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="plumber">Plumber</option>
              <option value="intern">Intern</option>
              <option value="engineer">Engineer</option>
              <option value="investor">Investor</option>
            </select>
            <p className="text-red-500 text-sm mt-1"></p>
          </div>

          {/* Message Field */}
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <Textarea
              placeholder="Enter your message"
              {...register("message", { required: "Message is required" })}
            />
            <p className="text-red-500 text-sm mt-1"></p>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </main>
  );
}

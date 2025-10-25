import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MdMail } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";

const formSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(3).max(200),
  message: z.string().trim().min(10).max(1000),
});

const FORM_ENDPOINT = "https://formspree.io/f/mjkaqokv"; // your Formspree POST endpoint

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    // <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
    //   <div className="w-full max-w-2xl">
    //     {success && (
    //       <p className="text-green-400 mb-4 text-center">
    //         Message sent successfully!
    //       </p>
    //     )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-700 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-6 flex">
            <div className="mr-10 inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/5 bg-gradient-to-br from-gray-500/20 to-gray-500/5 shadow-[0_0_30px_rgba(128,128,128,0.2)]">
              <MdMail className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl mx-auto font-bold mb-4 text-center text-gray-300">
              Let's Connect
            </h1>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Name</label>
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full bg-[#262626] border border-gray-600 rounded-md px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-400/20 transition-all duration-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="your.email@company.com"
              className="w-full bg-[#262626] border border-gray-600 rounded-md px-4 py-2 text-gray-100 placeholder-gray-400
               focus:border-blue-500 focus:ring focus:ring-blue-400/20 transition-all duration-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Subject</label>
            <input
              {...register("subject")}
              placeholder="Internship Opportunity / Collaboration"
              className="w-full bg-[#262626] border border-gray-600 rounded-md px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-gray-500 focus:ring focus:ring-gray-400/20 transition-all duration-300"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Message</label>
            <textarea
              {...register("message")}
              placeholder="Your message..."
              className="w-full bg-[#262626] border border-gray-600 rounded-md px-4 py-2 min-h-[150px] resize-none text-gray-100 placeholder-gray-400 focus:border-gray-500 focus:ring focus:ring-gray-400/20 transition-all duration-300"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-gray-900 font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2 text-blue-900">
                <div className="w-5 h-5 border-2 border-blue-900/30 border-t-blue-900 rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <BsSendFill className="w-5 h-5 text-gray-900" />
                Send Message
              </span>
            )}
          </button>
        </form>
    //   </div>
    // </div>
  );
};

export default Index;

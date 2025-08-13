// src/ContactPage.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react'; // Import Formspree hooks

const ContactPage = () => {
  // Initialize the form with your Formspree form ID
  // Replace "YOUR_FORMSPREE_FORM_ID" with the ID they gave you (e.g., "mrblllya")
  const [state, handleSubmit] = useForm("mrblllya");

  // --- Success State ---
  // When the form is successfully submitted, show a thank you message
  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 text-center">
        <div className="max-w-xl w-full mx-auto p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-400">
            Message Sent!
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Thank you for reaching out! I'll get back to you as soon as possible.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            (You can customize this success message further!)
          </p>
        </div>
      </section>
    );
  }

  // --- Form Render State ---
  // If not succeeded, render the form
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl w-full mx-auto p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden">
        {/* Decorative elements (optional, for visual flair) */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200 dark:bg-indigo-700 rounded-full opacity-10 blur-xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 dark:bg-purple-700 rounded-full opacity-10 blur-xl translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          Let's Build Something Amazing Together!
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you have a project idea, a question, or just want to connect, feel free to reach out. I'm always eager to collaborate and discuss new opportunities. Or Email me on NagendraThakurSharma@gmail.com
        </p>

        {/* Modern Contact Form - Updated to use Formspree's handleSubmit */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name" // Important: 'name' attribute must match formspree field
                className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                placeholder="John Doe"
                required // Added required attribute
              />
              {/* Formspree ValidationError for name (optional, but good practice) */}
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Your Email</label>
              <input
                id="email" // Important: 'id' attribute must match 'htmlFor' of label
                type="email"
                name="email" // Important: 'name' attribute must match formspree field
                className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                placeholder="you@example.com"
                required // Added required attribute
              />
              {/* Formspree ValidationError for email */}
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1" // Tailwind class for error styling
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject" // Important: 'name' attribute must match formspree field
                className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                placeholder="Project Inquiry, Collaboration, etc."
              />
              {/* Formspree ValidationError for subject (optional) */}
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message" // Important: 'name' attribute must match formspree field
                rows="8"
                className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                placeholder="Tell me more about your idea or question..."
                required // Added required attribute
              ></textarea>
              {/* Formspree ValidationError for message */}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="text-center md:text-right">
              <button
                type="submit"
                disabled={state.submitting} // Disable button during submission
                className="inline-flex items-center justify-center py-4 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed" // Added disabled styles
              >
                {state.submitting ? 'Sending...' : <><MessageCircle size={20} className="mr-2" /> Send Message</>}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
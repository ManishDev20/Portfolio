import React from "react";
import { ArrowUpRight } from "lucide-react";
const serviceOptions = [
  {
    value: "web-development",
    label: "Website Design & Development",
  },
  {
    value: "logo-design",
    label: "Logo Design",
  },
  {
    value: "ui-ux",
    label: "UI & UX Design",
  },
];
const budgetOptions = [
  {
    value: "less-30K",
    label: "Less than $300",
  },
  {
    value: "30K-50K",
    label: "$3,00 - $600",
  },
  {
    value: "50K-70K",
    label: "$600 - $800",
  },
  {
    value: "70K-90K",
    label: "$800 - $1000",
  },
  {
    value: "more than 90K",
    label: "More than $1000",
  },
];
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the form before redirecting
    const form = e.target;
    form.reset();

    window.gtag("event", "form_submission", {
      event_category: "Form",
      event_label: "Contact Form Submission",
    });

    // Redirect to "Thank You" page after a short delay to give user a moment
    setTimeout(() => {
      window.location.href = "https://manishcodes.netlify.app/thanks"; // Your thank you page URL
    }, 1000); // Delay for 1 second before redirecting
  };
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto bg-white text-black rounded-3xl p-8"
    >
      <h2 className="text-5xl font-bold text-gray-300 mb-8 text-center">
        GET IN TOUCH
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-lg mb-4">
            Have a project in mind? Let's discuss how we can help you achieve
            your goals.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/aad5f47fd4aa97b2ba37ca8fd38dd47b"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            type="hidden"
            name="_next"
            value="https://manishcodes.netlify.app/thanks"
          ></input>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Your email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Contact number <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="block text-sm font-medium">
                Service type <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300 appearance-none"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="budget" className="block text-sm font-medium">
              Estimated budget <span className="text-red-500">*</span>
            </label>
            <select
              id="budget"
              name="budget"
              required
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300 appearance-none"
            >
              <option value="">Select your budget range</option>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">
              Project description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={6}
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300 resize-none"
              placeholder="Tell us about your project requirements and goals..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Send Message
            <ArrowUpRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;

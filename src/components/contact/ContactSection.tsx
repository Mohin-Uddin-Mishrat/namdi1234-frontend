import React from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

// --- Form Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const ContactInput: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 sr-only" htmlFor={props.id || label}>
      {label}
    </label>
    <input
      id={props.id || label}
      placeholder={label}
      className="p-3 border border-gray-200 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-150 w-full"
      {...props}
    />
  </div>
);

// --- Contact Detail ---
interface ContactDetailProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="flex-shrink-0 p-3 bg-green-700 text-white rounded-lg shadow-md text-xl">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700">{children}</p>
    </div>
  </div>
);

// --- Main Component ---
const ContactSection: React.FC = () => {
  return (
    <section className="bg-[#E8F3DB] py-16 sm:py-24 w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT SIDE: Contact Info */}
          <div className="pr-0 lg:pr-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              We’d love to hear from you! Whether you have a question about our products, services, or need assistance with an existing order,
              our team is here to help. Your feedback and inquiries are important to us, and we strive to provide the best customer experience possible.
            </p>

            <div className="space-y-5">
              <ContactDetail icon={<HiLocationMarker />} title="Lagos Office">
                32 Rev SBJ Oshoffa Street Road 2 Extension, <br />
                Greenland Estate, Olokonla Ajah, <br />
                Lagos, Jakarta - Indonesia
              </ContactDetail>

              <ContactDetail icon={<HiMail />} title="Email us">info@jlnsolar.com</ContactDetail>
              <ContactDetail icon={<HiPhone />} title="Customer Support">+2348100221075</ContactDetail>
            </div>

            <p className="mt-10 text-sm text-gray-600">
              If you're interested in employment opportunities at ElectroDeals, please email us:{" "}
              <a href="mailto:info@jlnsolar.com" className="text-green-700 hover:text-green-500 transition duration-150">
                info@jlnsolar.com
              </a>
            </p>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leave us a message</h2>
            <p className="text-gray-600 mb-8">
              We’d love to hear from you! Whether you have a question about our products, services, or need assistance with an existing order,
              our team is here to help. Your feedback and inquiries are important to us.
            </p>

            <form action="#" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ContactInput label="Name" name="name" id="name" required />
                <ContactInput label="Company" name="company" id="company" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ContactInput label="Email" name="email" id="email" type="email" required />
                <ContactInput label="Phone" name="phone" id="phone" type="tel" />
              </div>

              <ContactInput label="Subject" name="subject" id="subject" />

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  className="p-2 border border-gray-200 rounded-md resize-y focus:ring-green-500 focus:border-green-500 transition duration-150 w-full"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-5 bg-green-900 text-white font-semibold rounded-md hover:bg-green-800 transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

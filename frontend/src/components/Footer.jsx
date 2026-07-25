import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="px-6 md:px-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div className="flex items-start gap-4">
  <img className="mb-5 w-40" src={assets.logo} alt="DocPoint Logo" />
  <p className="w-full md:w-2/3 text-gray-600 leading-6">
    <strong>DocPoint – Effortless Healthcare Scheduling

</strong> <br />Patients can instantly book appointments with trusted doctors—from routine check-ups to specialist care—in just a few clicks. Our smart reminders keep appointments on track, while real-time updates ensure seamless coordination. Designed for modern healthcare, we save time for both patients and providers.
  </p>
</div>


        {/* Middle Section */}
        <div>
          <p className="text-lg font-semibold mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-lg font-semibold mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-90000-90000</li>
            <li>customersupport@docpoint.in</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <hr className="border-gray-300" />
      <p className="py-5 text-sm text-center text-gray-600">
        © 2026 DocPoint. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

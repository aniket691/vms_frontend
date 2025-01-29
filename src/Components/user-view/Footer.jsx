import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import statUserIcon from "./images/stat-user-icon.png";
import statDocIcon from "./images/stat-doc.png";
import statSuccessIcon from "./images/stat-success.png";
import statVerifyIcon from "./images/stat-verify.png";


const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="https://themes.stackbros.in/eduport_r/assets/logo-22DQx7cW.svg"
                alt="Eduport Logo"
                width={130}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
            सरकारच्या सर्व सेवा एकाच ठिकाणी, सोप्या आणि सुरक्षित पद्धतीने ऑनलाइन प्रवेश, पारदर्शकता, तत्पर सेवा आणि नागरिकांसाठी विश्वसनीय डिजिटल समाधान   
            </p>
            <div className="flex gap-4">
              <Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company links */}
        <div className="flex flex-col space-y-3">
              {[
                {
                  icon: statUserIcon,
                  
                  label: "Integrated with Digital Locker",
                  bgcolor: "bg-[#DDE2E5]",
                },
                {
                  icon: statDocIcon,
            
                  label: "Integrated with Aadhaar",
                  bgcolor: "bg-[#FEF6E0]",
                },
                {
                  icon: statVerifyIcon,
                  
                  label: "Integrated with Pay Gov India",
                  bgcolor: "bg-[#EAE3F6]",
                },
                {
                  icon: statSuccessIcon,
                
                  label: "Certificates Digitally signed",
                  bgcolor: "bg-[#DCF1F4]",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bgcolor} rounded-xl p-2 flex gap-y-6 items-center space-x-2`}
                >
                  <img src={stat.icon} alt={stat.label} className=" mb-2 w-14" />
    
                  <div className="flex  flex-col items-start">
                    
                    <div className="text-sm text-gray-500 ">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

          {/* Community links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              {[
               { text: "डॉक्युमेंटेशन", to: "/docs" },
               { text: "वारंवार विचारले जाणारे प्रश्न", to: "/faq" },
               { text: "साइटमॅप", to: "/sitemap" },
               { text: "गोपनीयता धोरण", to: "/privacy-policy" },
               { text: "Privacy Policy", to: "/privacy-policy-en" },
               { text: "Terms and conditions", to: "/terms-en" },
               { text: "Shipping Policy", to: "/shipping-policy" },
               { text: "Return Policy", to: "/return-policy" },
               { text: "Refund Policy", to: "/refund-policy" },
               
              ].map((link) => (
                <li key={link.text}>
                  <Link to={link.to} className="text-gray-600 hover:text-gray-900">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching and Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Teaching</h3>
            <ul className="space-y-3 mb-6">
              {[
               { text: "केंद्र ", to: "/" },
               { text: "कसा मार्गदर्शक", to: "/guide" },
               { text: "अटी आणि शर्ती", to: "/terms" },
            
               
               
              ].map((link) => (
                <li key={link.text}>
                  <Link to={link.to} className="text-gray-600 hover:text-gray-900">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
  <p className="text-gray-600">
    <span className="text-gray-900">टोल फ्री:</span>{" "}
    <Link to="tel:+91 92842 73572" className="hover:text-gray-900">
    +91 92842 73572
    </Link>
    <br />
    <span className="text-sm text-gray-500">(9:AM ते 8:PM IST)</span>
  </p>
  <p className="text-gray-600">
    <span className="text-gray-900">ईमेल:</span>{" "}
    <Link to="mailto:mazedakhale@gmail.com" className="hover:text-gray-900">
    mazedakhale@gmail.com
    </Link>
  </p>
</div>

            <div className="flex gap-4 mt-6">
              <a href="#" className="transition-opacity hover:opacity-80">
                <img
                  src="https://themes.stackbros.in/eduport_r/assets/google-play-7Lsm2fJ4.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="transition-opacity hover:opacity-80">
                <img
                  src="https://themes.stackbros.in/eduport_r/assets/app-store-CfYJWrSW.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">कॉपीराइट © 2025 माझे दाखले, सर्व हक्क सुरक्षित </p>
            <div className="flex items-center gap-6">
              <div className="relative group">
                <Button className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-2 bg-white hover:bg-slate-200">
                  Language
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Button>
              </div>
              <Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                Terms of use
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


{/* <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a to="#" class=" hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Brand Center</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a to="#" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a to="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a to="#" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                    <a to="#" class="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a to="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a to="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a to="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a to="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a to="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a to="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
        </div>
      </div>
    </div>
</footer> */}
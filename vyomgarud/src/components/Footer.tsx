import {
  FaDiscord,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaTwitter,
} from "react-icons/fa6";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


const Footer = () => {
  return (
      <div className="w-full max-w-screen  ">
        
        {/* Top Section */}
        <div className="flex items-center justify-around ">
          
          {/* Company */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-heading uppercase tracking-wide">
              Company
            </h2>
            <ul className="space-y-3 text-body">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Brand Center</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-heading uppercase tracking-wide">
              Help Center
            </h2>
            <ul className="space-y-3 text-body">
              <li><a href="#" className="hover:underline">Discord Server</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="mb-4 text-sm font-semibold text-heading uppercase tracking-wide">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div className="space-y-1">
                <Label>Name</Label>
                <Input placeholder="Enter your name" />
              </div>
              <div className="space-y-1">
                <Label>Email</Label>
                <Input placeholder="Enter your email" type="email" />
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-400 pt-6 flex flex-col md:flex-row items-center justify-between">
          
          <span className="text-sm text-body">
            © 2023 <span className="font-semibold">VyomGarud™</span>. All Rights Reserved.
          </span>

          <div className="flex items-center mt-4 md:mt-0 space-x-5 text-body">
            <a href="#" className="hover:text-heading"><FaFacebook /></a>
            <a href="#" className="hover:text-heading"><FaDiscord /></a>
            <a href="#" className="hover:text-heading"><FaTwitter /></a>
            <a href="#" className="hover:text-heading"><FaGithub /></a>
            <a href="#" className="hover:text-heading"><FaDribbble /></a>
          </div>

        </div>
      </div>
  );
};

export default Footer;


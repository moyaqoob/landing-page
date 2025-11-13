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
    <footer className="bg-neutral-primary">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4  lg:py-8 md:grid-cols-4">
          {/* first line */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
              Company
            </h2>
            <ul className="text-body font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* second line */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
              Help center
            </h2>
            <ul className="text-body font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* third line */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
              Legal
            </h2>
            <ul className="text-body font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* form */}
          <form >
            <div className="space-x-2 space-y-2 pb-2 ">
              <Label className="">Name</Label>
              <Input placeholder="Enter your Name" />
            </div>
            <div className="space-y-2 pb-4">
              <Label className="">Email</Label>
              <Input placeholder="Enter your Email" />
            </div>
            <Button className="p-2">Submit</Button>
          </form>
        </div>
        <div className="px-4 py-6 bg-neutral-secondary-soft md:flex md:items-center md:justify-between">
          <span className="text-sm text-body sm:text-center">
            © 2023 <a href="https://flowbite.com/">VyomGarud™</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-2 rtl:space-x-reverse">
            <a href="#" className="text-body hover:text-heading">
              <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
              <FaDiscord />
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

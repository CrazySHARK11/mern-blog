import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, 
         BsInstagram, 
         BsTwitter, 
         BsGithub, 
         BsDribbble } from 'react-icons/bs'

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 ">
          <Link to="/" className="mb-[2em] block whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"> 
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white">Lovenish's </span>
          Blog
        </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm: sm:grid-cols-3 sm:gap-6">
            <div className="">
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link href="http://www.10jsprojects.com" 
              target="_blank"
              rel="noopener noreferrer"
              >
                100 JS Projects
              </Footer.Link>
              <Footer.Link href="http://www.10jsprojects.com" 
              target="_blank"
              rel="noopener noreferrer"
              >
                Sahand's Blog 
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div className="">
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup col>
              <Footer.Link href="http://www.10jsprojects.com" 
              target="_blank"
              rel="noopener noreferrer"
              >
               Github
              </Footer.Link>
              <Footer.Link href="http://www.10jsprojects.com" 
              target="_blank"
              rel="noopener noreferrer"
              >
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div className="">
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="http://www.10jsprojects.com" 
              target="_blank"
              rel="noopener noreferrer"
              >
                Privacy Policy
              </Footer.Link>
            
              <Footer.Link href="http://www.10jsprojects.com" 
              target="_blank"
              rel="noopener noreferrer"
              >
              Terms & Condition
              </Footer.Link>
             
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright 
             href="#" 
             by="Sahand's Blog" 
             year={new Date().getFullYear()} />

             <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsDribbble} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsTwitter} />
             </div>
        </div>
      </div>
    </Footer>
  );
}

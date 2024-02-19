import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-4xl sm:text-xl font-bold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white">
              Sahand's
            </span>
            Blog
          </Link>
          <p className=" text-sm mt-5">
            This is a demo project. you can sign up with your email and password
            or with google
          </p>
        </div>

        {/* Right */}
        <div className="flex-1 ">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign up
            </Button>
          </form>
 
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account ?</span>
            <Link to="/sign-in" className="text-blue-500">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


import { registerSubmit } from "@/actions/user";
import Link from "next/link";
import { redirect } from "next/navigation";


const Register = async () => {

  return (
    <div className="max-w-2xl p-4 my-5 mx-auto">
      <h2 className="font-bold text-xl  text-gray-800">
        Welcome to MyShop
      </h2>
      <p className="text-gray-600 text-sm max-w-sm mt-2">
        Please provide all the necessary information
      </p>

      <form action={registerSubmit} className="my-8 gap-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
          <div className="flex flex-col">
            <label htmlFor="firstname" className="mb-2">
              First Name
            </label>
            <input
              id="firstname"
              placeholder="Tyler"
              type="text"
              name="firstname"
              className="p-3 border"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="lastname" className="mb-2">
              Last Name
            </label>
            <input
              id="lastname"
              placeholder="Durden"
              type="text"
              name="lastname"
              className="p-3 border"

            />
          </div>
        </div>
        <div className="flex flex-row my-4 gap-5">
        <div className="flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
            
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            name="email"
            className="p-3 border"
            />
        </div>

        <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
            
            id="password"
            placeholder="***********"
            type="password"
            name="password"
            className="mb-5 p-3 border"
            />
        </div>
        </div>
        <button type="submit" className="primaryButton">
          Sign up &rarr;
        </button>

        <p className="text-gray-900 text-sm max-w-sm mt-2 dark:text-gray-900">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
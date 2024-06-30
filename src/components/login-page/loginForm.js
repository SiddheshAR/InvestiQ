import React from "react";
import { socialLogin } from "@/actions/user";

const SocialLogin = () => {
  return (
    <div>
      <form action={socialLogin}>
        <button className="p-2 border border-pink-400"  name="action" type="submit" value="google">
          Sign in with Google
        </button>

        <button className="p-2 border border-pink-400"  name="action" type="submit" value="github">
          Sign in with Github
        </button>
      </form>
    </div>
  );
};

export default SocialLogin;

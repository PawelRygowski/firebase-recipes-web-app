import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

function LoginForm({ existingUser }) {
  return (
    <div>
      <h1>LoginForm</h1>
      <p>{existingUser}</p>
    </div>
  );
}

export default LoginForm;

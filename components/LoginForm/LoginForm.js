function LoginForm() {
  return (
    <div className="flex justify-center items-center w-full bg-red-500 h-screen">
      <div className="flex flex-col">
        <div>Username:</div>
        <input></input>
        <div>Password:</div>
        <input></input>
        <button>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;

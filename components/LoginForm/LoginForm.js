function LoginForm() {
  return (
    <div className="flex justify-center w-full py-64">
      <div className="flex flex-col items-center font-body shadow-md max-w-xl border w-full px-6 mx-6">
        <div className="font-bold text-3xl align-center mt-5">Log In</div>
        <input
          className="border rounded focus:outline-none mt-6 p-3 w-full"
          placeholder="Email address"
        ></input>
        <input
          className="border rounded focus:outline-none mt-6 p-3 w-full"
          placeholder="Password"
        ></input>
        <button className="rounded-full bg-gray-700 text-white mt-6 py-3 w-full">
          Log In
        </button>
        <button className="rounded-full bg-gray-700 text-white mt-6 py-3 w-full mb-10">
          Google
        </button>
      </div>
    </div>
  );
}

export default LoginForm;

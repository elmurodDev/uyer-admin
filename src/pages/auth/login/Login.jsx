const Login = () => {

  return (
    <div className="w-full h-screen bg-white justify-center items-center inline-flex">
      <form
        className="w-[364px] p-5 gap-4 bg-white rounded-[14px] shadow-[0px_4px_30px_0px_rgba(26,28,33,0.05)] flex flex-col  items-center"
      >
        <input type={"text"}/>
        <button type="submit" className="w-full">Kirish</button>
      </form>
    </div>
  );
};

export default Login;
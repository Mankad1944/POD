import logo from "../../assets/logo.png"

const Login = () => {
  return (
    <div className="w-full h-screen p-0 flex relative bg-amber-500">
      <img src={logo} alt="" className="w-[60%] bg-cover bg-no-repeat md:block hidden max-lg:landscape:hidden" />
      <div className="md:w-1/2 max-lg:landscape:w-full w-full justify-items-center content-center max-lg:landscape:h-auto h-screen bg-amber-200 absolute right-0 md:rounded-l-3xl max-lg:landscape:rounded-none">
        {/* <div className="relative bg-amber-700 top-0">sv</div> */}
        <a href="/" className="material-symbols-outlined absolute border-2 border-amber-700 top-10 left-10 rounded-full p-3 text-amber-600 hover:text-white hover:bg-amber-600  transition-all duration-300">arrow_back</a>
        <div className="font-extrabold text-4xl text-amber-600 mb-5 max-lg:landscape:mt-10">Login</div>
        <div className="h-120 p-10 w-90 md:w-110 border-2 border-amber-900 rounded-3xl max-lg:landscape:mb-10">
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" className="mb-5 p-2 border-2 border-amber-900 rounded-xl w-full" />
                <label htmlFor="email">Password</label>
                <input type="password" name="password" placeholder="password" className="mb-5 p-2 border-2 border-amber-900 rounded-xl w-full" />
                <label htmlFor="email">Captcha</label>
                <span></span>
                <input type="email" name="email" placeholder="Email" className="mb-5 p-2 border-2 border-amber-900 rounded-xl w-full" />

                <div className="md:justify-between md:flex">
                    <button type="submit" name="submit" className="text-amber-600 bg-transparent hover:text-white hover:bg-amber-600 transition-all duration-300 cursor-pointer p-1.5 md:px-5 md:w-auto w-full rounded-full border-2 border-amber-600 md:mb-0 mb-5">Submit</button>
                    <button type="reset" name="reset" className="text-amber-600 bg-transparent hover:text-white hover:bg-amber-600 transition-all duration-300 cursor-pointer p-1.5 md:px-5 md:w-auto w-full rounded-full border-2 border-amber-600">Reset</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login

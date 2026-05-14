import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import logo1 from "../../assets/logo - Copy.png";

const Container1 = () => {
  return (
    <div className="md:flex text-amber-600 p-8 w-full min-h-screen bg-amber-50 items-center">
        <div className="md:w-1/2 w-full mr-5 md:mb-10 md:h-100 h-120 md:mt-20 mt-20 flex flex-wrap relative">
            <span className="font-extrabold md:text-5xl max-lg:landscape:text-3xl text-4xl text-amber-900 capitalize">Your imagination,<br />printed on<br />premium canvas</span>
            <span className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse praesentium inventore, iste, suscipit officia aperiam assumenda impedit id voluptate, exercitationem nihil. Doloribus, repellendus optio ducimus nesciunt rem repellat debitis nobis.</span>
            <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto text-center">
                <Link to="/design" className="flex max-lg:gap-3 justify-center md:justify-between hover:w-full absolute duration-500 rounded-full px-5 py-3 w-full md:text-base max-lg:landscape:text-xs md:w-43 bg-amber-800 text-amber-200">
                    <span>Start Designing</span><span>&rarr;</span>
                </Link>

                {/* <a href="/" className="hover:scale-90 duration-300 rounded-full px-5 py-3 w-full md:text-base max-lg:landscape:text-xs md:w-auto bg-amber-200 text-amber-900">
                    Explore Marketplace
                </a> */}
            </div>
        </div>
        <div className="md:w-1/2 w-full md:mb-10">
            <img src={logo} alt="" className="md:p-5 md:rounded-4xl rounded-3xl" />
        </div>
    </div>
  )
}

export default Container1

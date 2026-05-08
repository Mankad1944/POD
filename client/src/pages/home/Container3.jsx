// import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo - Copy.png";

const Container1 = () => {
  return (
    <div className="md:flex flex-wrap text-amber-600 p-8 w-full bg-amber-50 mb-25">
        <div className=" w-full p-3 md:p-10 mt-5 capitalize">
            <div className="md:text-4xl text-3xl mb-5 text-amber-900">Featured designs</div>
            <div className="md:justify-between flex flex-wrap">
                <span className="md:mb-0 mb-2 md:py-0 py-5 text-justify">curated highlights from our community of independent artists.</span>
                <a className="text-amber-900 border-2 border-yellow-900 rounded-full p-1.5 px-5 transition-all duration-300 hover:bg-amber-900 hover:text-amber-200" href="/designer">view all designs &rarr; </a>
            </div>
        </div>
        <div className="md:flex w-full md:p-5">
            <img src={logo1} className="md:w-2/3 md:h-full md:mr-5 md:mb-0 mb-2 rounded-2xl"></img>
            <div className="md:flex md:w-1/3 flex-wrap">
                <img src={logo1} className="md:w-full mb-2 rounded-2xl bg-amber-300" />
                <img src={logo1} className="w-full rounded-2xl h-1/2" />
            </div>
        </div>
    </div>
  )
}

export default Container1

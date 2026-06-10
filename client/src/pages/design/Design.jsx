import { Link, Outlet } from "react-router-dom"
import Footer from "../../components/footer/SecondaryFooter"
// import Latest from './Types/Latest'

var navLinks = [{id:1, link:'latest', name: 'Latest'},{id:2, link:'trending', name: 'Trending'},{id:3, link:'abstract', name: 'Abstract'},{id:4, link:'typography', name: 'Typography'},{id:5, link:'minimalist', name: 'Minimalist'}]

const Design = () => {
  return (
    <div className="min-h-screen bg-amber-100 items-center text-amber-600 relative">
        <div className="flex flex-col md:w-[50%] gap-5 top-50 p-8">
          <div className="text-amber-900 text-5xl font-bold mt-35">Design Inspiration</div>
          <div className="max-lg:w-full">Curated collections from the world's leading independent designers. High-fidelity prints, premium fabrics and professional-grade curation.</div>
          <div className="absolute bg-amber-800 rounded-md h-75 w-180 top-35 right-15">
            
          </div>
        </div>
        <div className="flex max-lg:gap-3 gap-2 mt-20 bg-amber-800 md:rounded-md md:w-150 md:ml-8 md:p-2 md:py-3 text-amber-200 max-lg:grid max-lg:grid-cols-2 max-lg:justify-items-center">
          {navLinks.map((links)=>{
            return (
              <div key={links.id} className="max-lg:py-3">
                <Link to={links.link} className="md:px-2">
                  <span className="text-center max-lg:active:bg-amber-50 hover:bg-amber-500 max-lg:rounded-md max-lg:bg-amber-500 py-2.5 px-4 hover:rounded-md hover:text-white transition-all duration-300">
                    {links.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
            {/* <Link className="bg-blue-300 px-3 py-2">Latest</Link>
            <Link className="bg-blue-300 px-3 py-2">Trending</Link>
            <Link className="bg-blue-300 px-3 py-2">Abstract</Link>
            <Link className="bg-blue-300 px-3 py-2">Typography</Link>
            <Link className="bg-blue-300 px-3 py-2">Minimalist</Link> */}
        <div className="w-full h-auto px-8 py-10 mt-5 rounded-2xl">
          <div className="mb-40">

          <Outlet />
          </div>
        </div>
        <div className="absolute w-full bottom-0">

        <Footer />
        </div>
    </div>
  )
}

export default Design

import { Link, Outlet } from "react-router-dom"
// import Latest from './Types/Latest'

var navLinks = [{id:1, link:'latest', name: 'Latest'},{id:2, link:'trending', name: 'Trending'},{id:3, link:'abstract', name: 'Abstract'},{id:4, link:'typography', name: 'Typography'},{id:5, link:'minimalist', name: 'Minimalist'}]

const Design = () => {
  return (
    <div className="min-h-screen p-10 bg-amber-100 items-center text-amber-600">
        <div className="flex flex-col md:w-[50%] gap-5 top-50">
          <div className="text-amber-900 text-5xl font-bold mt-35">Design Inspiration</div>
          <div className="max-lg:w-full">Curated collections from the world's leading independent designers. High-fidelity prints, premium fabrics and professional-grade curation.</div>
        </div>
        <div className="flex max-lg:gap-3 gap-2 mt-20 text-amber-900 max-lg:grid max-lg:grid-cols-2 max-lg:justify-items-center">
          {navLinks.map((links)=>{
            return (
              <div key={links.id} className="max-lg:py-3">
                <Link to={links.link} className="md:px-2">
                  <span className="text-center max-lg:active:bg-amber-50 hover:bg-amber-500 max-lg:rounded-md max-lg:bg-amber-500 py-3 px-4 hover:rounded-xl hover:text-white transition-all duration-300">
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
        <div className="w-full h-auto px-5 py-10 mt-5 rounded-2xl">
          <Outlet />
        </div>
    </div>
  )
}

export default Design

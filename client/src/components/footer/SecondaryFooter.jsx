
const SecondaryFooter = () => {
  return (
    <div className="p-5 md:justify-between flex md:flex-row flex-col text-amber-600 bg-amber-200 rounded-t-3xl">
        <div className="flex flex-col p-3 mb-10">
            <span className="text-2xl text-amber-900">Canvitch</span>
            <span className=""> &copy; 2026 Canvitch. All rights reserved.</span>
        </div>
        <div className="flex text-center md:flex-row flex-col gap-5 p-3">
            <a href="/" target="_blank" rel="noopener noreferrer" className="">privacy policy</a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="">terms of service</a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="">shipping info</a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="">contact us</a>
        </div>
    </div>
  )
}

export default SecondaryFooter

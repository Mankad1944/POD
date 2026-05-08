import logo from "../../assets/logo.png";
// import logo1 from "../../assets/logo - Copy.png";

const Container1 = () => {
  return (
    // <div className="bg-amber-800 h-4"></div>
    <div className="md:flex md:gap-5 max-lg:landscape:flex-col text-amber-600 p-8 bg-amber-200 items-center">
        <div className="md:w-1/2 max-lg:landscape:w-full md:mb-10 md:mt-10 mt-10">
            <img src={logo} alt="" className="md:p-5 min-w-full md:rounded-4xl rounded-3xl" />
        </div>
        <div className="md:w-1/2 max-lg:landscape:w-full w-full md:mr-5 md:mb-10 max-lg:landscape:mt-5 mt-10 md:mt-50 flex flex-col gap-5">
            <span className="capitalize md:text-5xl max-lg:text-3xl font-extrabold md:mb-5">our story</span>
            <span className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas tempora quasi magnam quos nemo totam! Sapiente blanditiis, illo laudantium pariatur corrupti assumenda. Officiis nulla quia, dolore perspiciatis repellendus magni nemo. Dolor fugiat dolorem qui ullam harum, eligendi quasi blanditiis voluptates consequatur voluptate. Sed molestias beatae tempore ad? Excepturi, sint?</span>
            <span className="text-justify mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam molestias perspiciatis facilis fugiat sit, nemo veniam rem repellendus ducimus adipisci! Accusamus ipsa obcaecati blanditiis harum, error sed facere est eius, aliquam quia eveniet omnis quaerat nesciunt dolorum laboriosam aut.</span>
        </div>
    </div>
  )
}

export default Container1

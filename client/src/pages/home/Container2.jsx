// import logo from '../../assets/logo.png'

const container2 = () => {

    const steps = [
        {id: 1, logo: 'wall_art', title: '1. choose canvas', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, incidunt?' },
        {id: 2, logo: 'brush', title: '2. upload printing', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, incidunt?' },
        {id: 3, logo: 'local_shipping', title: '3. we print & ship', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, incidunt?' }
    ]

  return (
    <div className='flex flex-wrap text-amber-600 bg-amber-100 p-8 w-full items-center'>
        <div className="text-center w-full items-center justify-items-center md:mt-20">
            <div className="text-amber-900 md:text-5xl mb-4 text-2xl">Effortless creation, from screen to seam.</div>
            <div className="text-amber-600 md:text-xl md:w-200">Our streamlined process ensures your art looks exactly as intended on high-quality fabrics.</div>
        </div>
        <div className="md:flex flex-wrap w-full text-center md:mt-25 md:mb-10 relative">
            {steps.map((step) => {
                return (
                    <>
                        <div className="border-amber-500 border-2 w-100 top-22 left-72 absolute border-dashed animate-fadeRight origin-left" />
                        <div className="border-amber-500 border-2 w-100 top-22 right-72 absolute border-dashed hidden md:block animate-fadeRight origin-left" />
                        {/* <hr /> */}
                        <div key={step.id} className="md:w-1/3 justify-items-center p-5 md:p-10 z-1">
                            <div className='material-symbols-outlined rounded-full h-25 w-25 flex mb-5 bg-amber-900 justify-center content-center text-amber-100' style={{ fontSize: '48px' }}>{step.logo}</div>
                            <div className="text-amber-900 md:text-3xl text-xl font-bold mb-2 capitalize">{step.title}</div>
                            <div className="">{step.desc}</div>
                        </div>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default container2

import { Link } from "react-router-dom"

const footer = () => {

  const f_elem = [
    { id: 1, title: 'Legal', icon1: 'privacy_tip', i_name1: 'Privacy Policy', link1: '/privacy-policy', icon2: 'gavel', i_name2: 'Terms of Service', link2: '/terms-of-service' },
    { id: 2, title: 'Support', icon1: 'local_shipping', i_name1: 'Shipping Info', link1: '/shipping-info', icon2: 'call', i_name2: 'Contact Us', link2: '/about' },
    { id: 3, title: 'Contact', icon1: 'share', i_name1: 'Share', link1: '/about', icon2: 'mail', i_name2: 'Mail', link2: '/about' }
  ]

  return (
    <div className="p-5 justify-items-center text-amber-600 bg-amber-200 rounded-t-3xl">
        <div className="md:flex flex-wrap w-full m-7 justify-center capitalize">
          <div className="md:w-1/4 p-5 w-full">
            <div className="text-2xl mb-2 text-amber-900">🎨Canvitch</div>
            <div className="">Empowering creators with print-on-demand appreals.</div>
          </div>
          {f_elem.map((elem) => {
            return (
              <div className="md:w-1/4 p-5 w-full" key={elem.id}>
                <div className="text-2xl mb-2 text-amber-900 w-60">{elem.title}</div>
                <div className="flex flex-col gap-2 w-40">
                  <Link to={elem.link1} className="items-center flex gap-2"><span className="material-symbols-outlined">{elem.icon1}</span>{elem.i_name1}</Link>
                  <Link to={elem.link2} className="items-center flex gap-2"><span className="material-symbols-outlined">{elem.icon2}</span>{elem.i_name2}</Link>
                </div>
              </div>
            )
          })}
        </div>
        <hr className="bg-amber-900 h-0.5 w-full" />
        <div className="text-amber-900 mb-10 mt-5"> &copy; 2026 Canvitch. All rights reserved.</div>
    </div>
  )
}

export default footer

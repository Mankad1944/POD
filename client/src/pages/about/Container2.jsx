import logo from "../../assets/logo.png";

const Container2 = () => {
  return (
    <div className="md:flex md:h-170 md:gap-5 bg-amber-50 w-full md:mb-20 md:mt-20 p-8">
      <div className="md:w-1/2 w-full md:mb-50 mt-20">
        <div className="text-amber-600 md:text-5xl max-lg:text-3xl">Get in Touch</div>
        <div className="mb-10 mt-5 text-justify">Having a question about an order, custom design, or partnership? Drop a message.</div>
        <form action="" method="post">
          <label htmlFor="name">Name</label><br />
          <input type="text" name="name" placeholder="name" className="border-2 border-amber-900 rounded-lg w-full px-3 py-2 mt-2 mb-2" /><br />
          <label htmlFor="email">Email</label><br />
          <input type="text" name="email" placeholder="email" className="border-2 border-amber-900 rounded-lg w-full px-3 py-2 mt-2 mb-2" /><br />
          <label htmlFor="message">Message</label><br />
          <textarea name="message" id="message" placeholder="Enter your message here" className="w-full rounded-lg border-2 border-amber-900 px-3 py-2 mt-2 mb-2 resize-none h-35"></textarea><br />
          <button type="submit" name="submit" className="w-full md:w-auto px-25 py-2 bg-amber-600 rounded-lg mt-2 mb-2">Submit</button>
        </form>
      </div>
      <hr className=" bg-amber-800 w-0.5 h-full" />
      <div className="md:w-1/2 w-full mr-5 md:mb-10 mt-20 mb-20 flex flex-col gap-5">
        <div className="h-3/4 bg-amber-700 overflow-hidden rounded-3xl border-2xl border-amber-900"><img src={logo} alt="" /></div>
        <div className="rounded-2xl w-full">
          <div className="p-5 flex items-center h-auto w-full gap-5 bg-amber-50 shadow-lg shadow-amber-200 rounded-2xl">
            <div className="material-symbols-outlined flex items-start bg-blue-300 rounded-full p-2 md:p-3">location_on</div>
            <div className="flex flex-col gap-1 max-lg:landscape:w-4/5 md:w-1/3">
              <span className="font-bold">svvvvvvvvvvvsdfsrgtgbh</span>
              <span className="block landscape:max-lg:w-full md:w-full w-60 h-auto wrap-break-word">sfvssdffffffffsfvefefgefgvffffffffffffffffffffffff</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container2

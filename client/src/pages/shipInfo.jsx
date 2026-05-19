
const shipInfo = () => {
  return (
    <div className="bg-amber-200 text-amber-600 h-screen justify-center flex items-center">
      <a href="/" className="material-symbols-outlined border-2 absolute fixed border-amber-700 top-10 left-10 rounded-full p-3 text-amber-600 hover:text-white hover:bg-amber-600  transition-all duration-300">arrow_back</a>
      <div className="border-2 border-amber-900 p-10 bg-amber-100 rounded-2xl h-[80%] w-[80%] absolute overflow-scroll [&_p]:text-md [&_p]:mb-5 [&_p]:text-justify [&_span]:text-xl [&_span]:text-amber-800 [&_li]:ml-7">
        <div className="text-4xl text-amber-900 mb-5 font-bold">Delivery & Access Information</div>
        <span style={{fontSize: '15px'}} className="flex right-0">Effective Date: [10/05/2026]</span>
        
        <p>This page explains how digital products and services are delivered through <span className="font-bold text-amber-600">Canvitch.</span></p>

        <span>1. Digital Delivery</span>

        <p>Canvitch provides digital products and services. No physical products are shipped unless explicitly stated.

        <pre>Digital content may include:</pre>
          <li>presentation files</li>
          <li>exported documents</li>
          <li>downloadable templates</li>
          <li>user-created design files</li><br />
          </p>

        <span>2. Access to Purchased or Created Content</span>

        <pre>After successful payment, account activation, or completion of creation, content will normally become available through:</pre>

        <p>
        * direct download
        * account dashboard access
        * export tools available inside the platform
        </p>

        <span>3. Delivery Time</span>

        <p>Most digital content is available immediately after successful processing.

        In some cases, availability may take additional time due to:

        <li>payment verification</li>
        <li>server processing</li>
        <li>file generation</li>
        <li>temporary technical issues</li>
        </p>

        <span>4. Download Responsibility</span>
        <p>
        Users are responsible for downloading and storing exported files where applicable.

        Canvitch recommends keeping backup copies of important files.
        </p>

        <span>5. Failed Delivery</span>
        <p>
        If purchased or generated digital content does not appear, users should:

        <li>refresh the account page</li>
        <li>verify payment confirmation</li>
        <li>check download history</li>
        <li>contact support if the issue continues</li>
        </p>

        <span>6. Service Availability</span>
        <p>
        Delivery of digital files depends on platform availability, internet access, and technical performance. Temporary interruptions may affect access.
        </p>
        <span>7. Contact</span>
        <p>
        For delivery-related questions:

        **Email:** [[your-email@example.com](mailto:your-email@example.com)]
        **Website:** [your website]
        </p>
      </div>
    </div>
  )
}

export default shipInfo

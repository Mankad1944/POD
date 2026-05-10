
const privacyPolicy = () => {
  return (
    <div className="bg-amber-200 text-amber-600 h-screen justify-center flex items-center">
      <a href="/" className="material-symbols-outlined border-2 absolute fixed border-amber-700 top-10 left-10 rounded-full p-3 text-amber-600 hover:text-white hover:bg-amber-600  transition-all duration-300">arrow_back</a>
      <div className="border-2 border-amber-900 p-10 bg-amber-100 rounded-2xl h-[80%] w-[80%] absolute overflow-scroll [&_p]:text-md [&_p]:mb-5 [&_p]:text-justify [&_span]:text-xl [&_span]:text-amber-800">
        <div className="text-4xl text-amber-900 mb-5 font-bold">Privacy Policy</div>
        <span style={{fontSize: '15px'}} className="flex right-0">Effective Date: [10/05/2026]</span>
        <p>This Privacy Policy explains how we collect, use, and protect information when you use our print-on-demand apparel store.</p>

        <span>Information We Collect</span>

        <p>
          We may collect the following information when you place an order, contact us, or use our website:

        * Name
        * Billing and shipping address
        * Email address
        * Phone number (if provided)
        * Order details such as selected products, sizes, colors, and quantities
        * Custom design files, text, or artwork uploaded by customers
        * Technical information such as browser type, device information, IP address, and usage data
        </p>

        <span>How We Use Your Information</span>

        <p>
          Your information may be used to:

        * Process and fulfill orders
        * Print and ship purchased products
        * Communicate order updates, delivery information, and support responses
        * Process payments through payment service providers
        * Improve website performance, products, and customer experience
        * Prevent fraud, misuse, and unauthorized activity
        </p>

        <span>Payment Information</span>

        <p>Payments are processed through third-party payment providers. We do not store full debit card, credit card, UPI, or banking details on our servers.</p>

        <span>Print and Shipping Partners</span>

        <p>To fulfill orders, necessary order information may be shared with printing, packaging, shipping, and logistics partners only for order processing and delivery.</p>

        <span>Customer Uploaded Designs</span>

        <p>
        If you upload artwork, images, logos, or text for custom products:

        * You confirm that you own the rights or have permission to use the uploaded content.
        * Uploaded files will be used only for order production, customer support, and order records.
        * We may refuse content that violates intellectual property rights, law, or platform rules.
        </p>

        <span>Data Retention</span>

        <p>Order-related information may be retained for business records, customer support, accounting, tax compliance, and dispute resolution. Customer-uploaded design files may be stored for a limited period necessary for production and support.</p>

        <span>Cookies and Analytics</span>

        <p>Our website may use cookies or similar technologies to improve browsing experience, remember preferences, and understand website usage.</p>

        <span>Information Sharing</span>

        <p>
        We do not sell or rent personal information. Information may be shared only with:

        * Payment processors
        * Printing and fulfillment partners
        * Shipping and logistics providers
        * Legal authorities when required by law
        </p>

        <span>Security</span>

        <p>Reasonable technical and administrative measures are used to protect customer information from unauthorized access, disclosure, alteration, or misuse.</p>

        <span>Your Rights</span>

        <p>You may request access to your personal information, correction of inaccurate information, or deletion of data where legally permitted.</p>

        <span>Changes to This Policy</span>

        <p>We may update this Privacy Policy from time to time. Updated versions will be published on this page with a revised effective date.</p>

        <span>Contact</span>

        <p>For privacy-related questions, contact: **[your email address]**</p>
      </div>


      {/*  */}

    </div>
  )
}

export default privacyPolicy

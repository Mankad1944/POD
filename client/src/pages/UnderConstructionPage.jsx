export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-amber-50">
      <div className="max-w-xl w-full text-center rounded-3xl shadow-sm border border-amber-200 bg-white p-10">
        <p className="text-sm font-medium tracking-wide text-amber-700 uppercase">
          Under Construction
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-amber-950">
          This page is still being built.
        </h1>

        <p className="mt-4 text-base text-amber-900/80 leading-7">
          Some sections are not ready yet. The page will be available once the remaining work is completed.
        </p>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block rounded-full px-6 py-3 bg-amber-800 text-amber-100 transition-all duration-300 hover:scale-95"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

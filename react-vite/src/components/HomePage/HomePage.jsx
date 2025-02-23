const links = [
  { name: 'Financial Planning', desc: `Our financial planning services are designed to help you chart a course toward your financial goals. We assess your current financial situation, identify opportunities for growth, and develop a customized plan that aligns with your objectives.`, href: '/financial-planning' },
  { name: 'Life Insurance', desc: `Protect your loved ones and secure your legacy with our life insurance solutions. We offer principal-protected living and death benefits through equity-indexed accounts, ensuring that your family's financial future is safeguarded. Our team will help you select the right policy to meet your needs and provide peace of mind.`, href: '/life-insurance' },
  { name: 'Annuities', desc: `Ensure a steady income stream during your retirement years with our annuity products. We offer high-bonus lump-sum options designed to secure your long-term retirement funds. Our annuities provide financial stability, allowing you to enjoy your retirement without financial worries.`, href: '/annuities' },
  { name: 'Asset Management', desc: `Our asset management services include the strategic allocation of stocks, bonds, ETFs, and custom notes in balanced portfolios. We work closely with you to develop an investment strategy that aligns with your risk tolerance and financial goals, aiming to maximize returns while managing risk.`, href: '/asset-management' }
]

function HomePage() {
    return (
        <div className="pt-24 sm:pt-32">
          <img
            alt=""
            src="https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.webp?s=2048x2048&w=is&k=20&c=kGWBwUV37-YTNvgKRS0m0zHSwJ4xLmdg9eQaFRhmYoE="
            className="absolute overflow-hidden inset-0 -z-10 size-full object-cover object-right md:object-center opacity-60"
          />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 bg-white/70 rounded-lg p-4">
              <h2 className="text-5xl font-semibold tracking-tight text-center text-black sm:text-left sm:text-7xl">Foundational Family Finance</h2>
              <p className="pt-8 text-lg font-medium text-center text-pretty text-black sm:mt-8 sm:pt-0 sm:text-left sm:text-xl/8">
              At Ellsworth Financial, we&apos;re dedicated to helping you achieve your financial goals and secure your future. With years of experience and a team of dedicated financial professionals, we&apos;re here to provide you with expert guidance and tailored solutions for your unique financial needs.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-black sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="/schedule" className="w-64 h-12 justify-self-center">
                <button className="h-full w-full justify-center rounded-3xl bg-blue-600 px-3 py-1.5 font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Schedule Today</button>
              </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-white pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-white mt-16 p-20">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 text-center sm:text-left sm:text-5xl">Explore Our Services</h2>
            </div>
            <div className="mx-auto items-start mt-10 grid max-w-2xl grid-cols-1 grid-auto-max gap-x-8 gap-y-16 border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {links.map((link) => (
                <article key={link.href} className="flex flex-col-reverse gap-1 rounded-lg px-3 shadow-xs">
                  <div className="flex items-center gap-x-4 text-md">
                  </div>
                  <div className="group">
                      <a href={link.href}>
                        <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600 text-center sm:text-left">{link.name}</h3>
                    <p className="mt-5  text-gray-600">{link.desc}</p>
                      </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
          </div>

        </div>
      )
}

export default HomePage

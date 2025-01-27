const links = [
    { name: 'Life Insurance', desc: 'Principal-protected living & death benefits in equity-indexed accounts.', href: '#' },
    { name: 'Annuities', desc: 'High-bonus lump-sum products to secure long-term retirement funds.', href: '#' },
    { name: 'Managed Assets', desc: 'Stocks, bonds, ETFs, & custom notes in balanced portfolios.', href: '#' },
    { name: 'Estate Planning', desc: 'Wills, trusts, property, copyright, trademark, & personal archives.', href: '#' },
  ]

function HomePage() {
    return (
        <div className="relative isolate bg-white py-24 sm:py-32 overflow-visible">
          <img
            alt=""
            src="background.jpg"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-30"
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
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">Foundational Family Finance</h2>
              <p className="mt-8 text-lg font-medium text-pretty text-black sm:text-xl/8">
              At Ellsworth Financial, we&apos;re dedicated to helping you achieve your financial goals and secure your future. With years of experience and a team of dedicated financial professionals, we&apos;re here to provide you with expert guidance and tailored solutions for your unique financial needs.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-black sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="/schedule">
                GET STARTED -
              </a>
                {/* {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))} */}
              </div>
              <strong className="text-black"> Our Services </strong>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {links.map((link) => (
                  <div key={link.name} className="flex flex-col-reverse gap-1">
                    <a className="text-base/7 text-black" href={link.href}>
                        Learn More
                    </a>
                    <dd>{link.desc}</dd>
                    <dt className="text-base/7 text-black">{link.name}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )
}

export default HomePage

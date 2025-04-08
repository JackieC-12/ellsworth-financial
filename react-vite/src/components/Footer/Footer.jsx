function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const servicesOptions = [
    { name: 'Financial Planning', href:"/financial-planning"},
    { name: 'Life Insurance', href:"/life-insurance"},
    { name: 'Annuities', href:"/annuities"},
    { name: 'Asset Management', href:"/asset-management"}
  ]

const aboutUsOptions = [
    { name: 'Our Firm', href:"/about"},
    { name: 'Contact Us', href:"/contact-us"}
]

function Footer() {
    return (
        <div className="bg-sky-900 bottom-0 w-full py-16">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="py-10 items-start mx-auto grid grid-auto-max grid-cols-1 gap-4 text-white sm:grid-cols-3">
                    <div className="flex justify-center">
                        <img
                            alt="Your Company"
                            src="logo.jpg"
                            className="h-16 hover:cursor-pointer"
                            href="/"
                        />
                    </div>

                    <div className="pt-10 sm:pt-0 justify-self-center sm:justify-start">
                        <div className="mx-auto text-center sm:text-left">
                            <p className="text-2xl font-semibold tracking-tight text-pretty">About Us</p>

                            <div className="pt-2">
                                {aboutUsOptions.map((item) => (
                                    <a
                                    key={item.name}
                                    href={ item.href }
                                    className={classNames(
                                        'text-black-500 hover:cursor-pointer', 'rounded-md font-medium', 'hover:text-blue-600',
                                    )}>
                                        <p className="pt-2">{item.name}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="justify-self-center sm:justify-start">
                        <div className="text-center sm:text-left">
                            <p className="text-2xl font-semibold tracking-tight text-pretty">Services</p>

                            <div className="pt-2">
                                {servicesOptions.map((item) => (
                            <a
                            key={item.name}
                            href={ item.href }
                            className={classNames(
                                'text-black-500 hover:cursor-pointer', 'rounded-md font-medium', 'hover:text-blue-600',
                            )}>
                                <p className="pt-2">{item.name}</p>
                            </a>
                        ))}
                            </div>
                        </div>
                    </div>


                </div>

                <div className="text-center pt-14 pb-7 sm:flex sm:items-start sm:justify-start sm:space-x-20">
                        <p className="text-14px text-white sm:pt-0">Copyright Ellsworth Financial 2023 -- All Rights Reserved</p>
                        <p className="text-14px text-white pt-4 sm:pt-0">Foundational Family Finance for the Future</p>

                        <div className="pt-4 sm:pt-0">
                            <a className="text-white text-14px" href="/privacy">Privacy Policy</a>
                        </div>
                </div>

                <div className="">
                    <p className="text-white text-sm sm:pt-0">
                        Investment advisory services offered through Alphastar Capital Management, LLC, a SEC-registered investment
                        adviser.  SEC registration does not constitute an endorsement of the firm by the SEC nor does it indicate
                        that the adviser has attained a particular level of skill or ability.  Fixed insurance products are
                        offered through Ellsworth Financial, and Alphastar Capital Management is not involved in the offer,
                        recommendation, sale or management of commission-based fixed Insurance products. Alphastar Capital Management
                        and Ellsworth Financial are separate and independent entities. This is for informational purposes
                        only and is not intended as legal, tax or investment advice or a recommendation of any particular security,
                        investment product or investment strategy.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

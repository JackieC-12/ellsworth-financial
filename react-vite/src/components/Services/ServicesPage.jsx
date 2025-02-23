const links = [
    { name: 'Financial Planning', desc: `Our financial planning services are designed to help you chart a course toward your financial goals. We assess your current financial situation, identify opportunities for growth, and develop a customized plan that aligns with your objectives.`, href: '/services/financial-planning' },
    { name: 'Life Insurance', desc: `Protect your loved ones and secure your legacy with our life insurance solutions. We offer principal-protected living and death benefits through equity-indexed accounts, ensuring that your family's financial future is safeguarded. Our team will help you select the right policy to meet your needs and provide peace of mind.`, href: 'services/life-insurance' },
    { name: 'Annuities', desc: `Ensure a steady income stream during your retirement years with our annuity products. We offer high-bonus lump-sum options designed to secure your long-term retirement funds. Our annuities provide financial stability, allowing you to enjoy your retirement without financial worries.`, href: 'services/annuities' },
    { name: 'Asset Management', desc: `Our asset management services include the strategic allocation of stocks, bonds, ETFs, and custom notes in balanced portfolios. We work closely with you to develop an investment strategy that aligns with your risk tolerance and financial goals, aiming to maximize returns while managing risk.`, href: 'services/asset-management' }
  ]

function ServicesPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center sm:text-left">Interested in Our Services?</h2>
              <p className="mt-2 text-lg/8 text-gray-600 text-center sm:text-left">Learn More Here</p>
            </div>
            <div className="mx-auto items-start mt-10 grid max-w-2xl grid-cols-1 grid-auto-max gap-x-8 gap-y-16 border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {links.map((link) => (
                <article key={link.href} className="flex flex-col-reverse gap-1 rounded-lg px-3 shadow-xs">
                  <div className="flex items-center gap-x-4 text-md">
                  </div>
                  <div className="group">
                      <a href={link.href}>
                        <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600 text-center sm:text-left">{link.name}</h3>
                    <p className="mt-5 text-gray-600">{link.desc}</p>
                      </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
    )
}

export default ServicesPage

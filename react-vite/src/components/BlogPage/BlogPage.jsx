const links = [
    { name: 'Life Insurance', desc: 'Understanding Term, Whole, and Universal Life Policies', href: '/education/life-insurance' },
    { name: 'Annuities', desc: 'Types, Benefits, and How They Work', href: '#' },
    { name: 'IRA', desc: 'Individual Retirement Accounts Explained', href: '#' },
    { name: 'HSA', desc: 'Health Savings Accounts and Their Tax Advantages', href: '#' },
  ]

function BlogPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Check out our Blog</h2>
              <p className="mt-2 text-lg/8 text-gray-600">Try these amazing financial resources</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {links.map((link) => (
                <article key={link.href} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={link.href}>
                        <span className="absolute inset-0" />
                        {link.name}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{link.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )
}

export default BlogPage

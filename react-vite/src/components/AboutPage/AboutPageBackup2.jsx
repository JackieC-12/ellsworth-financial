function AboutPage() {
    return (
      <div className="py-24 sm:py-32 h-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl">
                <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Our Firm
                </p>

                <p className="mt-6 text-lg/8 text-gray-600">
                    At Ellsworth Financial, we specialize in foundational family finance, offering a range of services designed to protect and grow your wealth.
                    Our team of experienced professionals is committed to providing personalized strategies that align with your financial objectives. We believe in
                    building long-term relationships with our clients, ensuring that your financial plans evolve with your changing needs.
                </p>
            </div>

            <div>

            </div>

            <div className="max-w-xl">
              <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our Mission</p>
              <p className="mt-6 text-lg/8 text-gray-600">Our mission is to empower individuals and families to achieve financial independence through innovative and
                 tax-efficient strategies. We strive to provide education and guidance that enable our clients to make informed decisions about
                 their financial futures.
                 </p>
              <div>
                  <ul className="mt-6 list-disc text-lg/8 text-gray-600">
                      <li>
                        <p className="text-pretty text-gray-900 text-xl font-semibold ">Integrity</p>
                        <p className="py-4">We uphold the highest standards of honesty and transparency in all our interactions.</p>
                      </li>
                      <li>
                        <p className="text-pretty text-gray-900 text-xl font-semibold ">Client-Centricity</p>
                        <p className="py-4">Your financial well-being is our top priority. We tailor our services to meet your specific needs and goals.</p>
                      </li>
                      <li>
                        <p className="text-pretty text-gray-900 text-xl font-semibold ">Innovation</p>
                        <p className="py-4">We leverage cutting-edge financial strategies to provide effective solutions for our clients.</p>
                      </li>
                      <li>
                        <p className="text-pretty text-gray-900 text-xl font-semibold ">Education</p>
                        <p className="py-4">We believe in empowering our clients with knowledge, enabling them to make informed financial decisions.</p>
                      </li>
                  </ul>
              </div>
            </div>

            <div className="max-x-12">
              <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our Vision</p>
              <p className="mt-6 text-lg/8 text-gray-600">We envision a future where our clients enjoy financial security and peace of mind, knowing that their wealth
                is protected and positioned for growth. Our goal is to be a trusted partner in your financial journey, helping
                you navigate the complexities of wealth management with confidence.
                </p>
            </div>

          </div>
        </div>
      </div>
      )
  }

  export default AboutPage

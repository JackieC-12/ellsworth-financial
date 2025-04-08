function AboutPage() {
  return (
    <div className="pt-24 sm:pt-32 h-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl text-center sm:text-left">
              <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Our Firm
              </p>

              <p className="mt-6 text-xl/9 text-gray-600">
              At Ellsworth Financial, we concentrate in foundational family finance, offering a range of services designed to protect and grow your wealth.
              Our team of experienced professionals is committed to providing personalized strategies that align with your financial objectives. We believe in
              building long-term relationships with our clients, ensuring that your financial plans evolve with your changing needs.
              </p>
          </div>

          <div className="justify-self-end bg-white">
              <img
                  alt="Tanner J Ellsworth Photo"
                  src="familyA.jpg"
                  className="mt-6 w-[48rem] sm:w-[30rem] sm:justify-self-center md:-ml-4 lg:-ml-0"
                />
            </div>
        </div>
      </div>

      <div className="bg-neutral-100 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl text-center sm:text-left">
              <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our Mission</p>

              <p className="mt-6 text-xl/9 text-gray-700">We empower individuals and families to achieve financial independence through innovative and
                 tax-efficient strategies. We strive to provide education and guidance that enable our clients to make informed decisions about
                 their financial futures. We envision a future where our clients enjoy financial security and peace of mind, knowing that their wealth
                is protected and positioned for growth. Our goal is to be a trusted partner in your financial journey, helping
                you navigate the complexities of wealth management with confidence.
              </p>
            </div>

            <div className="max-w-xl pl-4">
            <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center sm:text-left">What We Value</p>
            <ul className=" pl-4 mt-6 list-disc text-lg/8 text-gray-700">
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
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="text-center">
            <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our Approach</p>

            <p className="mt-6 text-xl/9 text-gray-600"> Our goal is not only to position you for success in achieving your financial
                objectives but also to provide you with a comprehensive investment plan
                that you can feel confident in, even during the inevitable market
                fluctuations. We accomplish this through an evidence-based strategy
                focused on smart diversification, low investment costs, and risk
                minimization. Together, we create a tailored investment strategy designed
                to meet your unique goals. Once the strategy is in place, we continue to
                monitor and fine-tune your portfolio with active management, rebalancing,
                and tax-loss harvesting as needed to keep it aligned with your objectives.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700/85 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto grid max-w-2xl items-start gap-x-8 grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="text-4xl font-semibold tracking-tight text-pretty text-white text-center sm:text-left">Tanner J Ellsworth</p>
              <p className="text-2xl/9 font-light tracking-tight text-white text-center sm:text-left">Financial Advisor</p>
              <div className="mt-6 text-lg/9 text-white">
              <p className="pb-4">
                  My name is Tanner J Ellsworth of Ellsworth Financial. I have been in the financial
                  services industry since 2012. I am licensed as an investment advisor representative
                  and insurance producer in over 10 states.
              </p>
              <p className="pb-4">
                I grew up as the second of nine children of a U.S. diplomat and lived a large part of
                my childhood in foreign countries, including the United Arab Emirates, Israel and
                Mexico. As such, I was often in position to build bridges. When two of my siblings
                got into an argument, I would help to moderate and reconcile. When finding myself
                surrounded by a new environment and new culture, I had to make the most of it,
                and I eventually came to enjoy making friends with people of different ethnic and
                religious backgrounds. I learned to not be satisfied with just enduring or
                compromising, but to create win-win relationships and win-win solutions. This is
                what I enjoy about being a financial advisor.
              </p>
              {/* <p className="pb-4">
                When I meet with individuals or families to discuss their savings and investments,
                many people expect to have to sacrifice liquidity or to put their money at risk in
                return for a higher rate of return. Others expect to settle for a low rate of return so
                that their savings will be more safe and secure. Naturally, there are gives and
                takes with every investment or financial product, but if you search for holistic
                solution and spend just a little more time and effort strategizing about taxes, life
                events, personal goals and other factors, the results can be amazing.
              </p> */}
              <p className="pb-4">
                I like to strategize and solve puzzles. I find that people like to solve their own
                financial puzzles along with me. It&apos;s fun! And in the end, people are often tempted
                to wonder “Why does this look so good? What&apos;s the catch”? The catch is that we
                had to work a little smarter in order to find great solutions to mitigate taxes,
                increase your retirement income and protect and grow your savings.
              </p>
              </div>
            </div>
            <div className="justify-self-end">
              <img
                  alt="Tanner J Ellsworth Photo"
                  src="headshotA.jpg"
                  className="mt-6 w-[48rem] rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[25rem] sm:justify-self-center md:-ml-4 lg:-ml-0"
                />
            </div>

            <div className="max-w-xl pt-20 sm:pt-0">
              <p className="text-4xl font-semibold tracking-tight text-pretty text-white text-center sm:text-left">Nika Noun</p>
              <p className="text-2xl/9 font-light tracking-tight text-white text-center sm:text-left">Financial Advisor</p>
              <div className="mt-6 text-lg/9 text-white">
                <p className="pb-4">
                  My name is Nika Noun, and I am a financial advisor at Ellsworth Financial. My
                  passion for business and finance began at a young age, and I have dedicated my
                  career to helping people achieve financial independence and reach their financial
                  goals.
                </p>

                <p className="pb-4">
                  Growing up in Asia and spending my formative years in Cambodia taught me
                  resilience, adaptability, and the value of community support. After moving to the
                  United States, I pursued higher education, earning an undergraduate degree in
                  finance from the BYU Marriott School of Business, followed by an MBA with a
                  focus on sales and marketing.
                </p>

                <p className="pb-4">
                  At Ellsworth Financial, I specialize in designing holistic financial strategies tailored
                  to each client&apos;s unique needs. My goal is to craft win-win solutions that balance
                  growth potential with security. By factoring in taxes, life events, and personal
                  goals, I strive to develop strategies that mitigate taxes, increase retirement
                  income, and protect and grow savings.
                </p>
              </div>
            </div>

              <div className="justify-self-end">
                <img
                src="headshotB.png"
                className="mt-2 w-[48rem] rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[25rem] sm:justify-self-center md:-ml-4 lg:justify-self-end lg:-ml-0"
                />
              </div>

              <div className="max-w-xl pt-20 sm:pt-0">
                <p className="text-4xl font-semibold tracking-tight text-pretty text-white text-center sm:text-left">Fatima Villajuan</p>
                <p className="text-2xl/9 font-light tracking-tight text-white text-center sm:text-left">Office Manager</p>
                <div className="mt-6 text-lg/9 text-white">
                  <p className="pb-4">
                    At Ellsworth Financial, I manage all back-office operations to ensure a smooth and efficient
                    client experience. I handle financial paperwork at every stage, from applications to transfers
                    and follow-ups, while coordinating documentation and supporting Tanner Ellsworth and Nika Noun.
                  </p>
                  <p className="pb-4">
                    I also communicate with clients to track their documents and ensure timely processing. By streamlining
                    operations, I help our advisors focus on delivering the best financial solutions. I take pride
                    in keeping things organized and ensuring a seamless experience for our clients.
                  </p>
                  <p className="pb-4">
                    I hold a bachelor&apos;s degree from St. Paul University in the Philippines and moved to the U.S.
                    in July 2023. Before transitioning into finance, I worked as a chef in Orlando
                    and spent a year in Dubai&apos;s hospitality industry.
                  </p>
                </div>
              </div>

              <div className="justify-self-end">
              <img
                src="headshotCCopy.png"
                className="mt-2 w-[48rem] rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[25rem] sm:justify-self-center md:-ml-4 lg:justify-self-end lg:-ml-0"
                />
              </div>

              <div className="max-w-xl pt-20 sm:pt-0">
                <p className="text-4xl font-semibold tracking-tight text-pretty text-white text-center sm:text-left">Taylor Ellsworth</p>
                <p className="text-2xl/9 font-light tracking-tight text-white text-center sm:text-left">Technology Specialist</p>
                <div className="mt-6 text-lg/9 text-white">
                  <p className="pb-4">
                  My name is Taylor Ellsworth, and I work as a Technology Specialist at Ellsworth Financial.
                  I am a software developer turned financial professional with a passion for efficiency and innovation.
                  Having started my software programming journey at age 14, I have developed software in Python, Java,
                  Javascript, and C#, working professionally as a software and web developer for many years.
                  </p>
                  <p className="pb-4">
                  I have also served as a full-time missionary in the Philippines, where I honed my interpersonal skills and
                  served as a financial secretary, optimizing budgeting and expenses for a group of 100 missionaries. These diverse
                  experiences have instilled in me a deep appreciation for diverse perspectives and a drive to find the right tool for every job.
                  </p>
                  <p className="pb-4">
                  At Ellsworth Financial, I leverage my technical skills to maintain accurate financial records,
                  helping clients secure their financial future. I assist in meeting all of our clients&apos; needs
                  by creating automated email campaigns to ensure timely client communication.
                  </p>
                </div>
              </div>

              <div className="justify-self-end">
              <img
                src="headshotD.jpg"
                className="mt-2 w-[48rem] rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[25rem] sm:justify-self-center md:-ml-4 lg:justify-self-end lg:-ml-0"
                />
              </div>
          </div>
        </div>
      </div>
      <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="pr-4">
                        <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Contact Us</p>
                        <p className="mt-6 text-lg/8 text-gray-600">At Ellsworth Financial, we specialize in foundational family finance, offering a range of services designed to protect and grow your wealth.
                            Our team of experienced professionals is committed to providing personalized strategies that align with your financial objectives. We believe
                            in building long-term relationships with our clients, ensuring that your financial plans evolve with your changing needs.</p>
                        <div className="mt-12">
                            <p className="text-lg/8 text-gray-800">
                                    472 E Elm St
                                    <br/>
                                    American Fork, UT 84003
                                </p>
                            <p className="pt-2 text-lg/8 text-gray-800">
                                Monday - Friday
                            </p>
                            <p className="text-lg/8 text-gray-800">
                                9 am to 5 pm MST
                            </p>
                        </div>
                        <div className="pt-4">
                            <a href="tel:801-290-8247" className="text-lg/8 text-gray-800 hover:text-blue-600">
                                Phone&emsp;(801) 290-8247
                            </a>
                        </div>
                            <a href="mailto:placeholder@gmail.com" className="text-lg/8 text-gray-800 hover:text-blue-600">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tanner@ellsworthfinancial.com</a>
                            <br />
                            <br />
                            <a href="/schedule" className="text-2xl hover:text-blue-600">Contact Ellsworth Financial</a>
                    </div>

                    <div className="mt-16 hidden sm:block">
                    <iframe width="600" height="450" style={{ border:0 }} allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJe92A7meBTYcRa9dGTQyS0UY&key=AIzaSyBbCrR14ZOLiuB1LmlGS-1HmFWbRUBv9XE"></iframe>
                    </div>
                </div>
            </div>
      </div>
    </div>
    )
}

export default AboutPage

function AboutPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">Our Mission</p>
                <p className="mt-6 text-lg/8 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi turpis, finibus id elit a, euismod pellentesque nisi.
                    Aliquam mattis tellus et lectus tincidunt dictum. Nullam porttitor tincidunt ante sed dignissim. Donec eu blandit justo.
                    Quisque vitae dignissim augue. Nam id odio vehicula, tempus augue non, porttitor eros. Proin efficitur malesuada metus,
                    quis cursus purus euismod ut. Pellentesque hendrerit sit amet lorem non fringilla. Praesent ultricies feugiat libero, in
                    vehicula libero rhoncus quis. Proin rhoncus felis ex, id porttitor risus vehicula sed. Vestibulum sed efficitur nunc. Nunc sit
                    amet vulputate mi. Nullam auctor est sed sollicitudin porttitor. </p>
            </div>
          <div className="mt-10 mx-auto max-w-7xl px-6 lg:px-8">
            {/* <br></br> */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Tanner J Ellsworth
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600 sm:mt-10">
                  My name is Tanner J Ellsworth of Ellsworth Financial. I have been in the financial
                  services industry since 2012. I am licensed as an investment advisor representative
                  and insurance producer in over 10 states.
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
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
                  <p className="mt-6 text-lg/8 text-gray-600">
                  When I meet with individuals or families to discuss their savings and investments,
many people expect to have to sacrifice liquidity or to put their money at risk in
return for a higher rate of return. Others expect to settle for a low rate of return so
that their savings will be more safe and secure. Naturally, there are gives and
takes with every investment or financial product, but if you search for holistic
solution and spend just a little more time and effort strategizing about taxes, life
events, personal goals and other factors, the results can be amazing.
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                  I like to strategize and solve puzzles. I find that people like to solve their own
                financial puzzles along with me. It&apos;s fun! And in the end, people are often tempted
                to wonder “Why does this look so good? What&apos;s the catch”? The catch is that we
                had to work a little smarter in order to find great solutions to mitigate taxes,
                increase your retirement income and protect and grow your savings.
                  </p>


                </div>
              </div>
              <img
                alt="Tanner J Ellsworth Photo"
                src="headshotA.jpg"
                // width={2432}
                // height={1442}
                className="mt-6 w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[25rem] sm:justify-self-center md:-ml-4 lg:justify-self-end lg:-ml-0"
              />
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Nika Noun
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                My name is Nika Noun, and I am a financial advisor at Ellsworth Financial. My
passion for business and finance began at a young age, and I have dedicated my
career to helping people achieve financial independence and reach their financial
goals.
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                Growing up in Asia and spending my formative years in Cambodia taught me
resilience, adaptability, and the value of community support. After moving to the
United States, I pursued higher education, earning an undergraduate degree in
finance from the BYU Marriott School of Business, followed by an MBA with a
focus on sales and marketing.
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                At Ellsworth Financial, I specialize in designing holistic financial strategies tailored
to each client&apos;s unique needs. My goal is to craft win-win solutions that balance
growth potential with security. By factoring in taxes, life events, and personal
goals, I strive to develop strategies that mitigate taxes, increase retirement
income, and protect and grow savings.
                </p>
              </div>
              <img
              src="headshotB.png"
              className="mt-2 w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[25rem] sm:justify-self-center md:-ml-4 lg:justify-self-end lg:-ml-0"
              ></img>
            </div>
          </div>
        </div>
      )
}

export default AboutPage

// const api_key = process.env.REACT_APP_MAP_KEY

// const embed = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJe92A7meBTYcRa9dGTQyS0UY&key=${api_key}`
// console.log(embed)

function ContactUsPage() {
    return (
        <div className="py-24 sm:py-32">
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
                            <a href="mailto:placeholder@gmail.com" className="text-lg/8 text-gray-800 hover:text-blue-600">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder@gmail.com</a>
                            <br />
                            <br />
                            <a href="/schedule" className="text-xl hover:text-blue-600">Contact Ellsworth Financial</a>
                    </div>

                    <div className="mt-16">
                    <iframe width="600" height="450" style={{ border:0 }} allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage

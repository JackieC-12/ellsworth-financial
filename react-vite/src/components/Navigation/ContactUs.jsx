function ContactUs() {
    return(
        <div className="mx-auto px-2 pt-1 sm:px-6 lg:px-8 bg-gray-500 justify-center">
            <div className="flex mx-auto justify-end max-w-7xl pb-2 px-8">
                <a href="tel:801-290-8247">
                <p className="px-4 text-white hover:text-sky-300">(801) 290-8247</p>
                </a>

                <a href='/schedule'>
                <button className="text-white hover:text-sky-300">Schedule a Meeting</button>
              </a>
            </div>


        </div>
    )
}

export default ContactUs

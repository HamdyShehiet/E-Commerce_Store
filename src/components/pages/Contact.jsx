import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto flex flex-col gap-12">
          <div className="flex items-center gap-2 font-[poppins] text-sm font-normal">
            <Link to="/" className="text-[--textTwo-clr]">
              Home /
            </Link>
            <span className="text-black">Contact</span>
          </div>

          <div className="grid xl:grid-cols-[21.25rem,_50rem] xl:justify-between gap-y-8 font-[poppins]">
            <div className="flex flex-col gap-4 p-8 shadow-md ">
              <article className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 text-center leading-10 bg-[--secondaryThree-clr] text-white rounded-full">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <h2 className="text-base font-medium text-black">Call To Us</h2>
                </div>
                <p className="text-sm font-normal text-black">We are available 24/7, 7 days a week.</p>
                <p className="text-sm font-normal text-black">Phone: +8801611112222</p>
                <hr className="my-4" />
              </article>

              <article className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 text-center leading-10 bg-[--secondaryThree-clr] text-white rounded-full">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <h2 className="text-base font-medium text-black">Write To US</h2>
                </div>
                <p className="text-sm font-normal text-black">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-sm font-normal text-black">Emails: customer@exclusive.com</p>
                <p className="text-sm font-normal text-black">Emails: support@exclusive.com</p>
              </article>
            </div>

            <form className="flex flex-col gap-5 p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input type="text" id="name" placeholder="Your Name *" required className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] " />
                </div>
                <div>
                  <input type="email" id="email" placeholder="Your Email *" required className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] " />
                </div>
              </div>

              <div>
                <input type="tel" id="phone" placeholder="Your Phone *" required className="w-full p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] " />
              </div>

              <div>
                <textarea id="message" rows="6" placeholder="Your Message" className="w-full min-h-[10.625rem]  p-3 border-none outline-none rounded bg-[--secondaryTwo-clr] "></textarea>
              </div>

              <div className="text-right">
                <input type="submit" value="Send Message" className="py-3 px-8 rounded-[4px] text-base font-medium  bg-[--secondaryThree-clr] hover:bg-[--hoverBtnOne-clr] text-[--textOne-clr] cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;

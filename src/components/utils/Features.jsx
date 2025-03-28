function Features() {
  return (
    <section className="py-10">
      <div className="container mx-auto flex items-start justify-center flex-wrap pb-5 gap-20  font-[poppins]">
        <div className="w-[min(17.5rem,_100%)] flex flex-col items-center text-center">
          <div className="bg-gray-200 rounded-full p-3 mb-4">
            <div className="flex items-center justify-center w-[3.625rem] h-[3.625rem] rounded-full bg-black text-white">
              <img src="/icons/delivery.png" alt="Delivery Icon" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-black ">FREE AND FAST DELIVERY</h3>
          <p className="text-sm text-black">Free delivery for all orders over $140</p>
        </div>

        <div className="w-[min(17.5rem,_100%)] flex flex-col items-center text-center">
          <div className="bg-gray-200 rounded-full p-3 mb-4">
            <div className="flex items-center justify-center w-[3.625rem] h-[3.625rem] rounded-full bg-black text-white">
              <img src="/icons/customer-service.png" alt="Customer Service Icon" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-black ">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm text-black">Friendly 24/7 customer support</p>
        </div>

        <div className="w-[min(17.5rem,_100%)] flex flex-col items-center text-center">
          <div className="bg-gray-200 rounded-full p-3 mb-4">
            <div className="flex items-center justify-center w-[3.625rem] h-[3.625rem] rounded-full bg-black text-white">
              <img src="/icons/secure.png" alt="Secure Icon" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-black ">MONEY BACK GUARANTEE</h3>
          <p className="text-sm text-black">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
}
export default Features;

const page = () => {
  return (
    <section className="bg-[#f9f9f7] min-h-[100vh]">
      <div className="">
        <div className=" max-container text-center space-y-[20px] mx-auto py-[70px] lg:pb-[361px] pb-[50px]">
          <h1 className="text-[#2C2F24] lg:text-[100px] md:text-[70px] text-[40px] font-normal lg:leading-[96px] leading-[50px]">
            Book A Table
          </h1>
          <p className="text-[#495460] lg:text-lg text-[16px] font-normal max-w-[500px] mx-auto">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className=" flex flex-col bg-[url('/bookbg.png')] lg:h-[700px] md:h-[500px] h-auto bg-cover lg:gap-[83px] md:gap-[50px] gap-[30px]">
          <form className="max-container lg:mt-[-240px] mt-[20px] p-[40px] flex flex-col gap-6 bg-white rounded-xl shadow-2xl mx-auto">
            <div className="flex gap-6 lg:flex-row flex-col">
              <label
                htmlFor="date"
                className="flex flex-col text-[#2C2F24] text-[16px] font-bold"
              >
                Date
                <input
                  className="bg-white px-6 py-4 border rounded-full"
                  type="text"
                  placeholder="date-month-year"
                />
              </label>
              <label
                htmlFor="Time"
                className="flex flex-col text-[#2C2F24] text-[16px] font-bold"
              >
                Time
                <input
                  className="bg-white px-6 py-4 border rounded-full"
                  type="email"
                  placeholder="06:30 PM "
                />
              </label>
            </div>
            <div className="flex gap-6 lg:flex-row flex-col">
              <label
                htmlFor="Name"
                className="flex flex-col text-[#2C2F24] text-[16px] font-bold"
              >
                Name
                <input
                  className="bg-white px-6 py-4 border rounded-full"
                  type="text"
                  placeholder="Enter your name "
                />
              </label>
              <label
                htmlFor="Phone"
                className="flex flex-col text-[#2C2F24] text-[16px] font-bold"
              >
                Phone
                <input
                  className="bg-white px-6 py-4 border rounded-full"
                  type="number"
                  placeholder="xxx xxx xxxx"
                />
              </label>
            </div>
            <label
              htmlFor="person"
              className="flex flex-col text-[#2C2F24] text-[16px] font-bold"
            >
              Total person
              <input
                className="bg-white px-6 py-4 border rounded-full"
                type="select"
                placeholder="enter total person"
              />
            </label>

            <input
              className="bg-[#AD343E] text-white px-6 py-4 border rounded-full"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;

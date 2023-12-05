const Contact = () => {
  return (
    <div className=" flex flex-col bg-white lg:gap-[83px] md:gap-[50px] gap-[30px]">
      <form className="max-container lg:mt-[-240px] mt-[20px] p-[40px] flex flex-col gap-6 bg-white rounded-xl shadow-2xl mx-auto">
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
            htmlFor="Email"
            className="flex flex-col text-[#2C2F24] text-[16px] font-bold"
          >
            Email
            <input
              className="bg-white px-6 py-4 border rounded-full"
              type="email"
              placeholder="Enter your email"
            />
          </label>
        </div>
        <label
          htmlFor="subject"
          className="flex flex-col text-[#2C2F24] text-[16px] font-bold"
        >
          Subject
          <input
            className="bg-white px-6 py-4 border rounded-full"
            type="text"
            placeholder="write a  Subject"
          />
        </label>
        <label
          htmlFor="message"
          className="flex flex-col text-[#2C2F24] text-[16px] font-bold"
        >
          Message
          <textarea
            className="bg-white px-6 py-4 border "
            placeholder="Write your message"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <input
          className="bg-[#AD343E] text-white px-6 py-4 border rounded-full"
          type="submit"
          value="Send"
        />
      </form>
      <div className="max-container mt-[30px] lg:mb-[125px] md:mb-[70px] mb-[30px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[90px] md:gap-[60px] gap-[30px]">
        <div className="flex flex-col gap-6">
          <h5 className="text-[#2C2F24] text-[20px] font-bold">Call Us:</h5>
          <p className="text-[#AD343E] text-[24px] font-bold">+ 888-123-650</p>
        </div>
        <div className="flex flex-col gap-6">
          <h5 className="text-[#2C2F24] text-[20px] font-bold">Hours:</h5>
          <div>
            <p className="text-[#2C2F24] text-[18px] font-normal">
              Mon-Fri: 11am - 8pm
            </p>
            <p className="text-[#2C2F24] text-[18px] font-normal">
              Sat-Sun: 9am - 10pm
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h5 className="text-[#2C2F24] text-[20px] font-bold">Call Us:</h5>
          <p className="text-[#AD343E] text-[24px] font-bold">+ 888-123-650</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

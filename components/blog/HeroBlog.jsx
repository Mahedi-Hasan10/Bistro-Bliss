import Image from "next/image";
import BlogCard from "./BlogCard";

const HeroBlog = () => {
  return (
    <section className="w-full bg-[#f9f9f7]">
      <div className="max-container lg:py-[120px] md:py-[60px] py-[40px] lg:px-0 px-4">
        <div className="flex justify-between mb-[64px]">
          <h2 className="text-[#2C2F24] lg:text-[55px] md:text-[40px] text-[30px] font-medium lg:leading-[60px] leading-8">
            Our Blog & Articles
          </h2>
          <a
            href=""
            className="lg:py-[20px] py-[10px] lg:px-[32px] px-[16px] text-white bg-[#AD343E] lg:rounded-[118px] rounded-md text-center"
          >
            Read all articles
          </a>
        </div>
        <div className="flex justify-around flex-wrap gap-6">
          <div className="card bg-white shadow-xl">
            <figure>
              <Image src="/b0.png" width={1200} height={486} alt="burger" />
            </figure>
            <div className="card-body gap-[15px] py-4">
              <p className="text-[#737865] text-sm font-medium leading-5">
                January 3, 2023
              </p>
              <h5 className="text-[#2C2F24] text-[20px] font-medium leading-6">
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </h5>
              <p className="text-[#737865] text-sm font-medium leading-5">
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
                semper adipiscing massa gravida nisi cras enim quis nibholm
                varius amet gravida ut facilisis neque egestas.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;

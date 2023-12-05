import BlogCard from "@/components/blog/BlogCard";

const page = () => {
  return (
    <section className="bg-white">
      <div className=" max-container text-center space-y-[20px] mx-auto py-[70px] pb-[50px]">
        <h1 className="text-[#2C2F24] lg:text-[100px] md:text-[70px] text-[40px] font-normal lg:leading-[96px] leading-[50px]">
          Our Blog & Articles
        </h1>
        <p className="text-[#495460] lg:text-lg text-[16px] font-normal max-w-[500px] mx-auto">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>
      <div className=" max-container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:pb-[138px] lg:px-0 px-4 pb-[50px]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default page;

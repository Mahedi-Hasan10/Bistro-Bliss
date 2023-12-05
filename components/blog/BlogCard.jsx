import Image from "next/image";
import Link from "next/link";
const BlogCard = () => {
  return (
    <div className="card max-w-[343px] bg-white shadow-xl">
      <figure>
        <Image src="/b1.png" width={343} height={232} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="text-[#737865] text-sm font-medium leading-5">
          January 3, 2023
        </p>
        <h5 className="text-[#2C2F24] text-[20px] font-medium leading-6">
          How to prepare the perfect french fries in an air fryer
        </h5>
        <Link className="text-[#2C2F24] py-2" href="/blog-details">
          Read more..
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

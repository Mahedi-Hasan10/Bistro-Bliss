import MenuButton from "@/components/menu/MenuButton";
import MenuCard from "@/components/menu/MenuCard";
import OrderApp from "@/components/menu/OrderApp";
const items = [
  {
    id: 1,
    image: "/menu/egg.png",
    title: "Fried Eggs",
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: 9.33,
  },
  {
    id: 2,
    image: "/menu/pizza.png",
    title: "Hawaiian Pizza",
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: 15.25,
  },
  {
    id: 3,
    image: "/menu/cocktail.png",
    title: "Martinez Cocktail",
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: 7.23,
  },
  {
    id: 4,
    image: "/menu/cake.png",
    title: "Butterscotch Cake",
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: 20.5,
  },
  {
    id: 5,
    image: "/menu/lemonade.png",
    title: "Mint Lemonade",
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: 5.89,
  },
  {
    id: 6,
    image: "/menu/icecream.png",
    title: "Chocolate Icecream",
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: 10.05,
  },
  {
    id: 7,
    image: "/menu/burger.png",
    title: "Cheese Burger",
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: 12.55,
  },
  {
    id: 8,
    image: "/menu/waffels.png",
    title: "Classic Waffles",
    description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: 12.99,
  },
];
const page = () => {
  return (
    <section className="bg-white">
      <div className="max-container">
        <div className="text-center space-y-[20px] mx-auto py-[70px]">
          <h1 className="text-[#2C2F24] lg:text-[100px] md:text-[70px] text-[40px] font-normal lg:leading-[96px] leading-[50px]">
            Our Menu
          </h1>
          <p className="text-[#495460] lg:text-lg text-[16px] font-normal max-w-[500px] mx-auto">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap gap-[15px] mb-[70px] justify-center">
          <MenuButton TITLE="All" />
          <MenuButton TITLE="Breakfast" />
          <MenuButton TITLE="Main Dishes" />
          <MenuButton TITLE="Drinks" />
          <MenuButton TITLE="Dessert" />
        </div>
        <div className="flex items-center justify-center w-full">
        <div className="flex justify-center flex-wrap gap-5 max-w-[80%] items-center p-4 lg:pb-[130px] md:pb-[60px] pb-[30px]">
          {items.map((item) => (
            <MenuCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        </div>
        <OrderApp />
      </div>
    </section>
  );
};

export default page;

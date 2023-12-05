const MenuButton = ({ TITLE }) => {
  return (
    <div>
      <button className="text-black border rounded-full px-[30px] py-[10px] hover:bg-[#AD343E] hover:text-white transition-all duration-300 cursor-pointer ">
        {TITLE}
      </button>
    </div>
  );
};

export default MenuButton;

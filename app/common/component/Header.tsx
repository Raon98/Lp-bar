const Header = () => {
  return (
    <>
      <header className="backdrop-blur-xl bg-gray-rgba-0.3 h-[3.5rem] font-bold px-[2.5rem] py-[1rem] fixed translate-z-0 transition-opacity duration-300 ease-in-out w-full z-[1000] top-0 left-0">
        
        <div className=" max-w-[68.75rem] mx-o my-auto flex items-center justify-between">
          <div className="flex items-center justify-center">로고</div>
          <div className="flex items-center justify-center gap-x-12">
            <div>
                이력서
            </div>
            </div>
        </div>
      </header>
      <div className=" absolute top-0 left-0 bg-gray-rgba-0.5  blur-sm w-full h-[3.5rem] z-0"></div>
    </>
  );
};

export default Header;

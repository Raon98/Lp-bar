const Header = () => {
  return (
    <>
      <header className="bg-transparent  mt-[3rem] h-[5rem] font-bold px-[3.5rem] py-[1rem] fixed translate-z-0 transition-opacity duration-300 ease-in-out w-full z-[1000] top-0 left-0">
        {/* <header className="backdrop-blur-xl bg-gray-rgba-0.3 h-[3.5rem] font-bold px-[2.5rem] py-[1rem] fixed translate-z-0 transition-opacity duration-300 ease-in-out w-full z-[1000] top-0 left-0"> */}
        <div className="mx-[5rem] my-auto flex items-center justify-between text-white ">
          <div className="text-[1.25rem]">Polariod</div>
          <div className="text-[4.25rem] font-['DIGI']">1998</div>
        </div>
      </header>
      <div className=" absolute top-0 left-0 bg-gray-rgba-0.5  blur-sm w-full h-[3.5rem] z-0"></div>
    </>
  );
};

export default Header;

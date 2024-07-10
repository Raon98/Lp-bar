const Footer = () => {
  const soundIcon = "play_w";
  const boxIcon = "storageBox_w";
  return (
    <>
      <footer className="bg-transparent font-bold px-[3.5rem] py-[1rem] fixed  w-full z-[1000] bottom-0 left-0">
        <div className="mx-[2rem] mb-[3rem] my-auto flex items-end justify-between text-white ">
          <button className="rounded_block">
            <img
              src={`/assets/images/${soundIcon}.png`}
              alt="soundIcon"
              className="bg-no-repeat bg-transparent bg-center object-cover w-2/3"
            ></img>
          </button>
          <button className="rounded_block">
            <img
              src={`/assets/images/${boxIcon}.png`}
              alt="soundIcon"
              className="bg-no-repeat bg-transparent bg-center object-cover w-1/2"
            ></img>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;

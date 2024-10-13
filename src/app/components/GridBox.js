const GridBox = () => {
  return (
    // <div className={styles.gridContainer}>
    //   {Array.from({ length: 9 }).map((_, index) => (
    //     <div key={index} className={styles.gridItem}></div>

    //   ))}
    // </div>
    <div className="">
      <div className="text-4xl">Slash Ramen</div>

      <div className="grid grid-cols-3 gap-4">
        <Box
          image="/images/mar22_ramen_12_e4tdxz.webp"
          name="tonkutsu"
          price="256$"
        />
        <Box
          image="/images/tonkotsuramenfront.jpg"
          name="tonkutsu"
          price="256$"
        />
        <Box
          image="/images/tonkotsuramenfront.jpg"
          name="tonkutsu"
          price="256$"
        />
      </div>
      <div className="grid grid-cols-6 gap-4 pt-4">
        <OptionBox />
        <OptionBox />
        <OptionBox />
        <OptionBox />
        <OptionBox />
        <OptionBox />
      </div>

      <div className="pt-6">
        <div className="grid grid-cols-3 gap-4 h-44">
          <div className="col-span-2 border-2 rounded-2xl bg-indigo-950">
            Basket
          </div>
          <div className="cursor-pointer text-xl bg-green-600 block h-20 content-center text-center rounded-2xl">
            Pay Button
          </div>
        </div>
      </div>
    </div>
  );
};

const Box = (props) => {
  return (
    <div
      className="p-4 h-56 rounded-xl overflow-hidden bg-cover"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <p className="text-black">{props.name}</p>
      <p className="">{props.price}</p>
    </div>
  );
};

const OptionBox = (props) => {
  return (
    <>
      <div className="bg-slate-500 h-28 rounded-2xl p-4">
        <div className="text-xl font-bold">Title</div>
      </div>
    </>
  );
};

export default GridBox;

// import GridBox from "./components/GridBox";


// export default function Home() {
//   return (
//     <div className="bg-white">
//       <div className="max-w-7xl mx-auto h-screen bg-white">
        
//         <GridBox />
        
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    // <div className={styles.gridContainer}>
    //   {Array.from({ length: 9 }).map((_, index) => (
    //     <div key={index} className={styles.gridItem}></div>

    //   ))}
    // </div>
    <div className="max-w-7xl mx-auto h-screen bg-white">
      <div className="text-4xl text-white">Slash Ramen</div>

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
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="Marinated Egg" price="70฿" />
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="Extra Chashu Pork" price="70฿" />
      </div>
      <div className="grid grid-cols-6 gap-4 pt-4">
        <OptionBox title="3X Spicy" price="30฿" />
        <OptionBox title="2X Spicy" price="20฿" />
        <OptionBox title="1X Spicy" price="" />
        <OptionBox title="" price="" />
        <OptionBox title="" price="" />
        <OptionBox title="" price="" />
      </div>

      <div className="pt-6">
        <div className="grid grid-cols-3 gap-4 h-44">
          <div className="col-span-2 border-2 rounded-2xl bg-indigo-950">
            cart
            <div>
              
            </div>
          </div>

          <div className="cursor-pointer text-xl bg-green-600 hover:bg-green-200 transition-all duration-300 block h-20 content-center text-center rounded-2xl">
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
      className="p-4 h-56 rounded-xl overflow-hidden bg-cover cursor-pointer hover:opacity-60 bg-slate-50"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <p className="text-black">{props.name}</p>
      <p className="">{props.price}</p>
    </div>
  );
};

const OptionBox = (props) => {
  return (
    <div className="flex flex-col justify-between hover:bg-slate-100 bg-slate-500
     transition-all duration-300 h-28 rounded-xl p-4 cursor-pointer"
    style={{opacity: 1}}
    disabled={true}>
      <div className="text-lg font-bold">{props.title}</div>
      <div className="text-md">{props.price}</div>
    </div>
  );
};

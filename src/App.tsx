import Card from "./components/Card";
import Reaction from "./assets/images/icon-reaction.svg";
import Memory from "./assets/images/icon-memory.svg";
import Verbal from "./assets/images/icon-verbal.svg";
import Visual from "./assets/images/icon-visual.svg";

const DATA = [
  {
    category: "Reaction",
    score: 80,
    icon: Reaction,
    color: "text-lightRed",
    background: "bg-lightRed",
  },
  {
    category: "Memory",
    score: 92,
    icon: Memory,
    color: "text-orangeYellow",
    background: "bg-orangeYellow",
  },
  {
    category: "Verbal",
    score: 61,
    icon: Verbal,
    color: "text-greenTeal",
    background: "bg-greenTeal",
  },
  {
    category: "Visual",
    score: 72,
    icon: Visual,
    color: "text-cobaltBlue",
    background: "bg-cobaltBlue",
  },
];

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between md:justify-center md:flex-row ">
      <div className="flex flex-col gap-1 h-full items-center">
        <div className="h-2/5 border flex flex-col items-center justify-around  w-full md:w-1/2 rounded-b-2xl  md:rounded-2xl bg-gradient-to-b from-slateBlue to-royalBlue py-4 ">
          <p className="text-lightLavender text-lg font-bold">Your Result</p>
          <div className="p-2 rounded-full flex flex-col justify-center items-center bg-gradient-to-b from-violetBlue to-persianBlue h-24 w-24">
            <p className="text-white text-4xl font-bold">76</p>
            <p className="text-lightLavender text-sm">of 100</p>
          </div>
          <p className="text-white text-2xl">Great</p>
          <p className="text-lightLavender text-sm w-2/3 text-center">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="h-3/5 flex flex-col gap-1 justify-around items-start md:items-center w-11/12 md:w-1/2 md:h-2/5 pl-8  md:rounded-r-xl md:px-2 md:shadow-2xl">
          <p className="text-lg font-bold">Summary</p>
          <div className="w-full flex flex-col items-center pr-8 md:pr-0 gap-2">
            {DATA.map((item) => {
              return (
                <Card
                  title={item.category}
                  icon={item.icon}
                  number={item.score}
                  color={item.color}
                  background={item.background}
                />
              );
            })}
          </div>
          <button className=" px-4 bg-darkGrayBlue text-white py-3 rounded-full w-11/12 md:w-full hover:bg-red-500">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

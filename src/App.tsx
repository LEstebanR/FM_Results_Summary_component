import Card from "./components/Card";

const DATA = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between md:justify-center md:flex-row">
      <div className="h-2/5 border flex flex-col items-center justify-around  w-full md:w-1/4 rounded-b-2xl  md:rounded-2xl bg-gradient-to-b from-slateBlue to-royalBlue py-4">
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
      <div className="h-3/5 flex flex-col justify-around">
        <p>Summary</p>
        <div>
          {DATA.map((item) => {
            return (
              <Card
                title={item.category}
                icon={item.icon}
                number={item.score}
              />
            );
          })}
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;

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
    <div className="h-screen w-screen flex flex-col items-center justify-between">
      <div className="h-2/5 border flex flex-col items-center justify-around w-full rounded-b-2xl bg-primary">
        <p>Your results</p>
        <div>
          <p>76</p>
          <p>of 100</p>
        </div>
        <p>Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="h-3/5 flex flex-col justify-around">
        <p>Summary</p>
        <div>
          {DATA.map((item) => {
            return <Card />;
          })}
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;

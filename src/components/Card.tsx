import { FC } from "react";

interface Props {
  title: string;
  icon: string;
  number: number;
  color: string;
  background: string;
}

const Card: FC<Props> = ({ title, icon, number, color, background }) => {
  return (
    <div
      className={`w-full  rounded-xl px-2 py-4 flex justify-between items-center ${background}`}
    >
      <div className="flex gap-1">
        <img src={icon} />
        <p className={`${color}`}>{title}</p>
      </div>
      <span className="flex gap-1">
        <p className="text-darkGrayBlue">{number}</p>
        <p className="text-gray-400">/ 100</p>
      </span>
    </div>
  );
};

export default Card;

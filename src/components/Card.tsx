import { FC } from "react";

interface Props {
  title: string;
  icon: string;
  number: number;
}

const Card: FC<Props> = ({ title, icon, number, color }) => {
  return <p>{title}</p>;
};

export default Card;

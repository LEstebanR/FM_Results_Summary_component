import { FC } from "react";

interface Props {
  title: string;
  icon: string;
  number: number;
}

const Card: FC<Props> = ({ title, icon, number }) => {
  return (
    <>
      <p>{title}</p>
      <p>{icon}</p>
      <p>{number}</p>
    </>
  );
};

export default Card;

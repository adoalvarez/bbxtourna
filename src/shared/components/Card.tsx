import React from "react";

interface CardProps {
  children: React.ReactNode;
  title: string;
}
const Card = (props: CardProps) => {
  return (
    <div className="card-container shadow-amber-700">
      <div className="card-header border-t border-x rounded-t border-gray-400 bg-(--secondary-color) p-2">
        <label className="font-bold text-md">{props.title}</label>
      </div>
      <div className="card-body border-x border-b rounded-b border-gray-400 p-2 bg-white">
        {props.children}
      </div>
    </div>
  )
}

export default Card;
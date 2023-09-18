import React from "react";
import AICard from "../../Cards/AICard";
import ai_ability_data from "../../../data/ai_ability_data";

const PdfAI = () => {
  const cardData = ai_ability_data.filter((card) => card.category === "pdf");

  return (
    <div className="grid grid-cols-2 gap-[40px] my-[20px]">
      {cardData.map((card) => (
        <AICard
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default PdfAI;

import React from "react";

interface IQues {
  question: string;
  answer: string;
}

const FaqCard: React.FC<{ ques: IQues }> = ({ ques }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-plus border border-base-300 bg-base-200 mb-3"
    >
      <div className="collapse-title text-xl font-medium">{ques.question}</div>
      <div className="collapse-content">
        <p>{ques.answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;

import React from 'react';

type SummaryProps ={
    numOfPeople: number,
    totalAmount: number,
}

const Summary: React.FC<SummaryProps> = ({numOfPeople, totalAmount}) => {
    return (
      <div>
        <div className="party">
          <input type="text" className="party" value={numOfPeople} />
          <span>名様</span>
        </div>
        <div className="total-amount">
          <span>合計</span>
          <input type="text" className="total-amount" value={totalAmount} />
          <span>円</span>
        </div>
      </div>
    )
}
export default Summary;
import React from 'react';
import {FeeClassification} from '../interfaces';

type DetailProps = {
    classification: FeeClassification;
    onNumOfPeopleChange: (num: number) => void;
}

const Detail: React.FC<DetailProps> = ({classification, onNumOfPeopleChange}) => {
    const _onNumOfPeopleChange=(e: React.ChangeEvent<HTMLSelectElement>) => {
      const num: number = Number(e.target.value);
      onNumOfPeopleChange(num);
    }
    return (
      <div >
        <div className="classification-name">{classification.name}</div>
        <div className="description">{classification.description}</div>
        <div className="unit-price">{classification.unitPrice}円</div>
        <div className="num-people">
          <select value={classification.numOfPeople}
            onChange={e => _onNumOfPeopleChange(e)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span>名</span>
        </div>
        </div>
    );
  }
export default Detail;
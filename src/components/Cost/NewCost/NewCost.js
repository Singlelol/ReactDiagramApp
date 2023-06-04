import React, {useState} from 'react';
import CostForm from '../CostForm/CostForm';
import './NewCost.css'

const NewCost = (props) => {

  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    };

    props.onAddCost(costData);
    setIsFormVisible(false);
  }

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  }

  const cancelConstHandler = () => {
    setIsFormVisible(false);
  }

  return (
  <div className='new-cost'>
    {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
    {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelConstHandler}/>}
  </div>
  );
}

export default NewCost;
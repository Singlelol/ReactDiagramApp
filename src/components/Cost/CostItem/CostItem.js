import CostDate from '../CostDate/CostDate';
import Card from '../Card/Card';
import './CostItem.css'

const CostItem = (props) => {

  const date = props.date;
  const description = props.description;
  const costAmount = props.amount;

  return (
    <Card className='cost-item'>
      <CostDate date={date}/>
      <div className='cost-item__description'>
        <h2>{description}</h2>
        <div className='cost-item__price'>${costAmount}</div>
      </div>
    </Card>
  );
}

export default CostItem;
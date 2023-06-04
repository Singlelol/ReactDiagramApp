import CostItem from "../CostItem/CostItem";
import './CostList.css';

const CostList = (props) => {

  if(props.costs.length === 0) {
    return <h2 className="cost-list__fallback">
        В этом году расходов нет
    </h2>;
  }

  return <ul className="cost-list">
    {props.costs.map((cost) => {
      return (
      <CostItem
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
        key={cost.id}
      />
      );
    })}
  </ul>;
}

export default CostList;
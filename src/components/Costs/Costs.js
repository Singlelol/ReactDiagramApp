import CostItem from "../CostItem/CostItem";
import Card from "../Card/Card";
import CostFilter from "../CostFilter/CostFilter";
import "./Costs.css"
import { useState } from "react";

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2021')
  
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  }

  return (
    <section>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        />
      </Card>
    </section>
  );
}

export default Costs;
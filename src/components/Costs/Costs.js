import Card from "../Card/Card";
import CostFilter from "../Cost/CostFilter/CostFilter";
import "./Costs.css"
import { useState } from "react";
import CostList from "../Cost/CostList/CostList";

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2021');
  
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <section>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
        <CostList costs={filteredCosts}/>
      </Card>
    </section>
  );
}

export default Costs;
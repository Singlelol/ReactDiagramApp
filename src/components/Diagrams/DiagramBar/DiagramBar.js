import './DiagramBar.css';

const DiagramBar = (props) => {

  const barFillHeightSet = () => {
    if (props.maxValue > 0) {
      return Math.round(props.value / props.maxValue * 100) + '%';
    }
    return '0%';
  }

  return (
  <div className='diagram-bar'>
    <div className='diagram-bar__inner'>
      <div className='diagram-bar__fill' style={{height: barFillHeightSet()}}></div>
    </div>
    <div className='diagram-bar__label'>{props.label}</div>
  </div>
  )
}

export default DiagramBar;
import './ChartBar.css'

// компонент месяца, для создания динамического стиля
const ChartBar = (props) => {
    let barFillHeight = '0%';
// в зависимости от условий меняется стиль компонента
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
        </div>
        <label className='chart-bar__label'>{props.label}</label>
    </div>
}

export default ChartBar
import './index.less'

import ErrorPieChart from './components/PieChart'
import ErrorLineChart from './components/LineChart'
import ErrorList from './components/List'


export default function ErrorLog() {

  return (
    <div className='page-container error-log-page'>
      <div className='search-form'>
        <div>时间段 --- 搜索框</div>
        <div>搜索条件：错误类型</div>
      </div>
      <div className='content-box'>
        <div className="l_list">
          <ErrorList />
        </div>
        <div className="r_chart">
          <ErrorLineChart />
          <ErrorPieChart />
        </div>
      </div>
    </div>
  )
}


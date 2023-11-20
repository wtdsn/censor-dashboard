
import { useEffect, useRef } from 'react'

import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import {
  PieChart,
  PieSeriesOption
} from 'echarts/charts';
import {
  LabelLayout
} from 'echarts/features';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use(
  [TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout]
);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | LegendComponentOption | PieSeriesOption
>

const option: EChartsOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};


export default function ErrorPieChart() {
  const chartEl = useRef<HTMLDivElement>(null)
  const chartIns = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    chartIns.current = echarts.init(chartEl.current)
    option && chartIns.current && chartIns.current.setOption(option);

    return () => {
      console.log("destroy");

      chartIns.current?.dispose()
    }
  }, [])

  return (
    <div className='pie-chart' ref={chartEl}></div>
  )
}
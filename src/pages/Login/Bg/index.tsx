import './index.less'
import ComImgUrl from '@/assets/img/login/pc.svg'

import { useEffect, useMemo, useRef, useState } from 'react'

export default function LoginBg() {
  const [posiInd, setPosiInd] = useState(0)
  const timer = useRef(0)
  const posiArr = useMemo(() => [[60, 60], [220, 100], [80, 160]], [])

  useEffect(() => {
    timer.current = window.setInterval(() => {
      setPosiInd((posiInd + 1) % posiArr.length)
    }, 1000)

    return () => {
      clearInterval(timer.current)
    }
  })

  return (
    <div className='login-bg-con'>
      <div className='computer'>
        <img src={ComImgUrl} alt="" />

        <div className='catch-icon' key={posiInd} style={{ left: posiArr[posiInd][0], top: posiArr[posiInd][1] }}>
          +
        </div>


        {/* 信号弧线 */}
        <svg className='signal'>
          <path d="M 130 8 C 140 22, 160 22, 170 8" stroke="#fff" strokeWidth={3} fill="transparent" display={posiInd >= 0 ? 'block' : 'none'} />
          <path d="M 110 20 C 130 50, 170 50, 190 20" stroke="#fff" strokeWidth={3} fill="transparent" display={posiInd >= 1 ? 'block' : 'none'} />
          <path d="M 90 32 C 120 80, 180 80, 210 32" stroke="#fff" strokeWidth={3} fill="transparent" display={posiInd >= 2 ? 'block' : 'none'} />
        </svg>
      </div>

      <div className='line-chart-con'>
        <svg className='lines'>
          <polyline points="30,170 90,90 160,135 250,30" fill="none" stroke="#ffffff" strokeWidth="6" strokeDashoffset="500" strokeDasharray="500" >
            <animate attributeName="stroke-dashoffset" values="500;0" dur="2.6s" repeatCount="indefinite" />
          </polyline>
        </svg>
      </div>
    </div>
  )
}
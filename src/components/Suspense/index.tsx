import React, { Suspense as ReactSus } from "react";
import { Spin } from 'antd'

interface SusInter {
  children: React.ReactNode,
  spinStyle?: React.CSSProperties
}

function Suspense({ children, spinStyle }: SusInter) {
  return (
    <ReactSus fallback={<Spin style={spinStyle ? spinStyle : {
      width: '100%',
      marginTop: '30vh'
    }}></Spin>}>
      {children}
    </ReactSus>
  )
}

export default Suspense
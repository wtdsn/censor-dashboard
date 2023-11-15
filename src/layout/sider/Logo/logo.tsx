import './logo.less'
import { useNavigate } from 'react-router-dom'

export default function Logo({ collapsed }: { collapsed: boolean }) {
  const navi = useNavigate()
  return (
    <div className='logo-box' onClick={() => navi('/')}>
      <div className={'size-control ' + (collapsed ? 'collapsed' : '')}>
        <img className='logo-img' src="/logo.png" alt="Censor" />
      </div>
    </div>
  )
}
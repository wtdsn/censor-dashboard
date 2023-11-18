import './index.less'

import TeamList from './components/TeamList'
import ProjectList from './components/ProjectList'

export default function TeamManager() {
  return (<div className="page-container project-page">
    {/* 团队 */}
    <TeamList />
    {/* 项目 */}
    <ProjectList />
  </div>)
}
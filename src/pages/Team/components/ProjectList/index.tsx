import { AimOutlined } from '@ant-design/icons'
import './index.less'

import { Row, Col } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ProjectItem {
  projectName: string,
  score: number | string,
  description: string,
  createTime: string,
  id: string | number,
}

const mockDataFn = (len: number) => {
  const projectList: ProjectItem[] = []
  for (let i = 0; i < len; i++) {
    projectList.push({
      projectName: '项目名称项目名称项目名称' + i,
      score: (Math.random() * 100).toFixed(0),
      description: '项目描述'.repeat(i),
      createTime: '2021-10-10',
      id: i,
    })
  }
  return projectList
}

export default function ProjectList() {
  const [projectList, setProjectList] = useState<ProjectItem[]>([])
  const curProjectId = 1
  useEffect(() => {
    setProjectList(mockDataFn(10))
  }, [])

  return (
    <div className='project-list-con'>
      <div className='title'>项目列表</div>

      {/* 搜索 */}
      <Row gutter={[20, 20]}>
        {
          projectList.map((item) => {
            return (
              <Col span={6} key={item.id}>
                <ProjectItem isSelected={curProjectId === item.id}  {...item} />
              </Col>
            )
          })
        }
        <Col span={6}>
          <CreateProject />
        </Col>
      </Row>
    </div>
  )
}

// 项目列表项
interface ProjectItemProps extends ProjectItem {
  isSelected?: boolean
}

function ProjectItem(props: ProjectItemProps) {
  return (<div className={'project-item ' + (props.isSelected ? 'cur-project' : '')}>
    {/* 顶部 */}
    <div className='head-part'>
      <div className='l-name'>
        <div className='name ellipsis-word-1' title={props.projectName}>{props.projectName}</div>
        <div className='create-time'>{props.createTime}</div>
      </div>
      <div className='r-score'>
        <span> {props.score}</span>
        分
      </div>
    </div>
    {/* 底部 */}
    <div className='footer-descip ellipsis-word-1'>
      {props.description}
    </div>

    {/* 操作按钮 */}
    <div className='opeations-box'>
      <div className='opeations'>
        <div className='opeation-item'><AimOutlined />设为当前项目</div>
        <div className='opeation-item'>更多</div>
        <div className='opeation-item'>删除</div>
      </div>
    </div>
  </div>)
}

// 新建项目
function CreateProject() {
  const navi = useNavigate()
  function toCraeteProject() {
    navi('/project-detail')
  }
  return (
    <div className='craete-project-btn' onClick={toCraeteProject}>
      <span>+</span> 新建项目
    </div>
  )
}
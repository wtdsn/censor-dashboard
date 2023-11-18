import './index.less'
import { Button, Form, Input } from 'antd';


interface Project {
  name: string,
  appid: string,
  description?: string,
  // 所属团队
  teamId: number,
}

export default function ProjectDetail() {
  return (
    <div className='page-container project-detail-page'>
      <div className='col project-info'>
        <ProjectInfoEdit />
      </div>
      <div className='col'>
        <ProjectMenberList />
      </div>
    </div>
  )
}

function ProjectInfoEdit() {
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item<Project>
        label="项目名称"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<Project>
        label="项目描述"
        name="description"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<Project>
        name="appid"
        label="appid"
      >
        <Input readOnly />
      </Form.Item>

      <Form.Item<Project>
        name="teamId"
        label="所属团队"
      >
        <Input readOnly value={"teamA"} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}


function ProjectMenberList() {
  return <div className='menber-list-con'>
    <div className='header'>
      <div className='title'>项目成员</div>
      <div className='btns'>
        <Button>邀请成员</Button>
        <Button>退出当前团队</Button>
        <Button>解散团队</Button>
      </div>
    </div>
    <div className='list'>
      <div className='item'>成员1</div>
      <div className='item'>成员2</div>
      <div className='item'>成员3</div>
      <div className='item'>成员4</div>
    </div>
  </div>
}
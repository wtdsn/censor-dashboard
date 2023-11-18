import { Button, Select, Flex } from "antd"
import './index.less'

export default function TeamList() {
  return (
    <>
      <div className='title'>项目列表</div>
      <p>todo : team list  , team list and project list all can open right dialog to edit ,like info and menber</p>
      <div className="team-box">
        <div className="selected-team">
          <Flex gap="small" wrap="wrap">
            <div>当前团队：
              <Select
                defaultValue="prject1"
                style={{ width: 120 }}
                options={[
                  { value: 'prject1', label: 'prject1' },
                  { value: 'prject2', label: 'prject2' },
                  { value: 'prject3', label: 'prject3' },
                  { value: 'prject4', label: 'prject4' },
                ]}
              />
            </div>
            <Button>邀请成员</Button>
            <Button>退出当前团队</Button>
            <Button>解散团队</Button>
          </Flex>
        </div>
        <Flex gap="small" wrap="wrap">
          <Button>加入团队</Button>
          <Button>创建团队</Button>
        </Flex>
      </div>
    </>
  )
}
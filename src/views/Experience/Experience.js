import { Button, Timeline,Modal } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'
import { ExperienceList } from './ExperienceList'
import { ClockCircleOutlined, SkinOutlined } from '@ant-design/icons'

export default function Experience() {
  const [current,setCurrent] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const item = [
    {
      label: '2023.04 - 2023.06',
      children: (
      <Button type='link' onClick={()=>setProject(0)}>Aws Serverless Service</Button>)
    },
    {
      label: '2022.12 - 2023.04',
      children: (<Button type='link' onClick={()=>setProject(1)}>News Release System</Button>)
    },
    {
      label: '2022.07 - 2022.10',
      children: (<Button type='link' onClick={()=>setProject(2)}>OZ Pty Ltd</Button>)
    },
    {
      label: '2022.03 - 2022.06',
      children: (<Button type='link' onClick={()=>setProject(3)}>Tellegacy</Button>)
    },
    {
      label: '2021.07 - 2021.11',
      children: (<Button type='link' onClick={()=>setProject(4)}>Vibe Check</Button>)
    },
    {
      label: '2020.07 - 2020.10',
      children: (<Button type='link' onClick={()=>setProject(5)}>BFit</Button>)
    },
    {
      label: '2020.07 - 2020.10',
      children: (<Button type='link' onClick={()=>setProject(6)}>ABC Gym</Button>)
    }
  ]

  const setProject = (index)=>{
    setCurrent(index)
    showModal()
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Title level={3}>Experience</Title>
      <Timeline
        mode='left'
        style={{padding:'50px'}}
        items={item} />
        <Modal title={ExperienceList[current].title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div><SkinOutlined style={{marginRight:'10px'}}/>{ExperienceList[current].role}</div>
        <div><ClockCircleOutlined style={{marginRight:'10px'}}/>{ExperienceList[current].time}</div>
        <h4>Description:</h4>
        <p>{ExperienceList[current].description}</p>
      </Modal>
    </div>
  )
}

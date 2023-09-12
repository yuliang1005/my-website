import { Button, Steps,Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import PersonalInformation from './PersonalInformation/PersonalInformation';
import Introduction from './Introduction/Introduction';
import Experience from './Experience/Experience'
import { ArrowRightOutlined, ArrowLeftOutlined, HomeOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

const customDot = (dot) => (
    <>
        {dot}
    </>
);

export default function Resume() {
    const [state, setState] = useState(0)
    const navigate = useNavigate()
    const items = [
        {
            title: 'Personal Information'
        },
        {
            title: 'Introduction'
        },
        {
            title: 'Experience'
        }
    ]

    useEffect(()=>{
        document.title = "Resume"
    },[])

    const onChange = (value) => {
        setState(value)
    }
    const nextState = () => {
        if (state < 2) {
            setState(state + 1)
        }
    }
    const prevState = () => {
        if (state > 0) {
            setState(state - 1)
        }
    }
    return (
        <Layout>
            <Content style={{ background: 'white', width: '95%', marginLeft: '2.5%', height: '95%', marginTop: '2.5%', marginBottom: '2.5%', padding: '20px' }}>
                <div style={{ padding: '20px', height: '95%', position: 'relative' }}>
                    <Steps
                        current={state}
                        progressDot={customDot}
                        onChange={onChange}
                        style={{
                            marginTop: '20px'
                        }}
                        items={items} />
                    {state === 0 && <PersonalInformation />}
                    {state === 1 && <Introduction />}
                    {state === 2 && <Experience />}
                    <div style={{ position: 'absolute', bottom: '0', left: '0', transform: 'translateY(30px)' }}>
                        <Button size='large' shape='circle' style={{ background: 'transparent', color: 'gray'}} icon={<HomeOutlined />} onClick={()=>navigate('/home')}></Button>
                    </div>
                    <div style={{ position: 'absolute', bottom: '0', right: '0', transform: 'translateY(30px)' }}>
                        <Button size='large' shape='circle' style={{ background: 'transparent', color: 'gray', marginRight: '10px' }} icon={<ArrowLeftOutlined />} onClick={prevState}></Button>
                        <Button size='large' shape='circle' style={{ background: 'transparent', color: 'gray' }} icon={<ArrowRightOutlined />} onClick={nextState}></Button>
                    </div>
                </div>
            </Content>
        </Layout>

    )
}

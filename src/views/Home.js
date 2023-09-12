import React, { useEffect } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()

    useEffect(()=>{
        document.title = "Welcome to Yuliang's website!"
    },[])
    return (
        <Content style={{ textAlign: 'center' }} className='home-content'>
            <p style={{ width: '50%', marginLeft: '25%', fontSize: '20px', wordSpacing: '5px', lineHeight: '30px' }} class='home-text'>Hello, I'm Yuliang Lei, you can also call me Rye. Thank you for visiting my personal website, please click the "start" button to view my resume.</p>
            <span>
                <span style={{ marginRight: '10px', fontSize: '20px' }} class='home-text'>start</span>
                <Button size='large' shape='circle' className='home-text' style={{ marginTop: '20px', background: 'transparent', color: 'gray' }} icon={<ArrowRightOutlined />} onClick={() => navigate('/resume')}></Button>
            </span>
        </Content>
    )
}

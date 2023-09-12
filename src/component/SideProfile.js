import React from 'react'
import { Button, Avatar, Popover } from 'antd';
import { MailOutlined, PhoneOutlined, InstagramOutlined } from '@ant-design/icons';

export default function SideProfile() {
    return (
        <>
            <Avatar size={150} style={{ marginTop: '150px' }} src='/profile-photo.png'></Avatar>
            <div className='home-text' style={{ marginTop: '5px', fontSize: '25px' }}>Yuliang Lei</div>
            <div style={{ marginTop: '5px' }}>
                <Popover content={(<>lyl13974846792@gmail.com</>)}>
                    <Button type='text' icon={<MailOutlined />}></Button>
                </Popover>
                <Popover content={(<>0468-943-404</>)}>
                    <Button type='text' icon={<PhoneOutlined />}></Button>
                </Popover>
                <Button type='text' href='https://www.instagram.com/rye__lei/' target='_blank' icon={<InstagramOutlined />}></Button>
            </div>
        </>
    )
}

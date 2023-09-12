import Title from 'antd/es/typography/Title'
import React from 'react'
import { Row, Col, Card, Avatar } from 'antd'
import { HomeOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
const { Meta } = Card;

export default function PersonalInformation() {
    return (
        <div>
            <Title level={3}>Personal Information</Title>
            <Card title='Contact' bordered={false} hoverable>
                <Row>
                    <Col span={12}>
                        <UserOutlined style={{ marginRight: '10px' }} />Yuliang Lei
                    </Col>
                    <Col span={12}>
                        <MailOutlined style={{ marginRight: '10px' }} />lyl13974846792@gmail.com
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <PhoneOutlined style={{ marginRight: '10px' }} />0468-943-404
                    </Col>
                    <Col span={12}>
                        <HomeOutlined style={{ marginRight: '10px' }} />270 Centre Rd, Bentleigh
                    </Col>
                </Row>
            </Card>
            <Card title="Education" bordered={false} hoverable style={{ marginTop: '20px' }}>
                <Row gutter={8}>
                    <Col span={8}>
                        <Card>
                            <Meta
                                avatar={<Avatar src='/graduation.png' />}
                                title='RMIT University'
                                description={(<>
                                    Diploma of Information Technology
                                    <br />2018.07 - 2019.06
                                </>)}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Meta
                                avatar={<Avatar src='/graduation.png' />}
                                title='RMIT University'
                                description={(<>
                                    Bachelor of Information Technology
                                    <br />2019.07 - 2022.06
                                </>)}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Meta
                                avatar={<Avatar src='/graduation.png' />}
                                title='Monash University'
                                description={(<>
                                    Master of Information Technology
                                    <br />2022.07 - 2024.06
                                </>)}
                            />
                        </Card>
                    </Col>
                </Row>



            </Card>
        </div>
    )
}

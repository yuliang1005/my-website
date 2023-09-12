import { Card, Col, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'

export default function Introduction() {
  const list = [
    'HTML/CSS','JavaScript','PHP','Python','SQL','ASP.NET / C#','AWS','React / Node.js'
  ]
  return (
    <div>
      <Title level={3}>Introduction</Title>
      <Row gutter={8}>
        <Col span={12}>
          <Card title='Expertise' hoverable>
            <ul>
              {list.map(value=>
                <li key={value} style={{marginBottom:'20px'}}>{value}</li>
                )}
            </ul>
          </Card>
        </Col>
        <Col span={12}>
          <Card title='Introduction' hoverable>I am a graduate student pursuing a Master's degree in Information Technology at Monash University, with an anticipated graduation date in 2024. I possess a solid foundation and extensive expertise in web programming. I have successfully crafted numerous web applications utilizing technologies such as HTML, CSS, JavaScript, and PHP. My proficiency extends to frameworks like React, Angular, and WordPress, along with hands-on experience in ASP.NET MVC Web Application (.NET Framework). Additionally, I possess a grasp of Java and Python programming languages. My skill set encompasses managing software projects based on the Scrum methodology, facilitating effective communication within teams. I am characterized by my diligence, grounded approach, strong execution capabilities, and a swift learning curve that fosters both personal and professional growth.
</Card>
        </Col>
      </Row>
    </div>
  )
}

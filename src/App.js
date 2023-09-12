import React from 'react';
import TopHeader from './component/TopHeader'; // Correct the casing here
import SideProfile from './component/SideProfile';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import './App.css'
import IndexRouter from './router/IndexRouter';


export default function App() {
  return (
    <div>
      <TopHeader />
      <Layout className='home-layout'>
        <Sider width={300} style={{ background: '#B6B9B9', textAlign: 'center' }}>
          <SideProfile />
        </Sider>
        <IndexRouter></IndexRouter>
        
      </Layout>



    </div>
  );
}

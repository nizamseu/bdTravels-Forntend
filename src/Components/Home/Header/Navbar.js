import React from 'react';
import { Layout, Menu} from 'antd';
import { DingtalkOutlined  } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header} = Layout;
const Navbar = () => {
    return (
        <Layout>
     
 
       
          <Menu mode="horizontal" >
            <Menu.Item  icon={<DingtalkOutlined />}><Link to='/'></Link>

              BD Travel
            </Menu.Item>
            <Menu.Item ><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item ><Link to='/about'>About</Link></Menu.Item>
            <Menu.Item ><Link to='/admin'>Admin</Link></Menu.Item>
             
          </Menu>
      
        </Layout>
    );
};

export default Navbar;
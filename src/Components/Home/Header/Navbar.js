import React from 'react';
import { Layout, Menu} from 'antd';
import { DingtalkOutlined  } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const { Header} = Layout;
const Navbar = () => {
  const {user,logOut}= useFirebase()
    return (
        <Layout>
     
 
       
          <Menu mode="horizontal" >
            <Menu.Item  icon={<DingtalkOutlined />}><Link to='/'></Link>

              BD Travel
            </Menu.Item>
            <Menu.Item ><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item ><Link to='/about'>About</Link></Menu.Item>
            <Menu.Item ><Link to='/admin'>Admin</Link></Menu.Item>
           {
             user.email ?
             <Menu.Item ><Link onClick={()=>{logOut()}}>Log Out</Link></Menu.Item>
             :<Menu.Item ><Link to='/login'>Login</Link></Menu.Item>
           }
            

            
             <p>{user&& user.displayName}</p>
          </Menu>
      
        </Layout>
    );
};

export default Navbar;
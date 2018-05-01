import * as React from 'react'
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd';
import {loginOut} from '../../utils/auth'
import "./index.css"
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup;
export interface HomeComponent {
    history?: any
}

export default class Home extends React.Component<HomeComponent, any> {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  public handleCtrl(info: any){
    //   console.log(info)
    if(info.key == 'loginOut'){
        loginOut().then((status: boolean) => {
            status && this.props.history.replace('/login')
        })
    }
  }
  render() {
    return (
      <Layout className="home-body">
        <Sider
          trigger={null}
          collapsible={false}
          collapsed={this.state.collapsed}
        >
          {/* <div className="logo">
            <h3>LINKEDING</h3>
          </div> */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} className="header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className="user">
                <Dropdown className="user" 
                placement="bottomCenter"
                trigger={['click', 'hover']}
                overlay={
                   <Menu className="user-ctrl" onClick={this.handleCtrl.bind(this)}>
                       <Menu.Item key="loginOut">
                          <Icon type="logout"/>　退出登录
                       </Menu.Item>
                   </Menu>
               }>
                  <Avatar size="large" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
               </Dropdown>
            </div>
               
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

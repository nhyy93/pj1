import React from "react";
import { DesktopOutlined, UserOutlined, SolutionOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

const SiderComponent = () => {
  return (
    <Sider
      style={{
        height: "100vh",
        position: "fixed",
        background: "#000000",
      }}
    >
      <div
        style={{marginBottom: '30px'}}
      >
        <img
          src="assets/DiamondLogo.PNG"
          alt="logo"
          style={{ width: "100%", height: "100px" }}
        />
      </div>
      <Menu theme='dark' defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<DesktopOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/accounts">Accounts</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<SolutionOutlined />}>
          <Link to="/requests">Requests</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default SiderComponent;

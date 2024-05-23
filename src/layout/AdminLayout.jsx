import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import SiderComponent from "../components/SideBar";

const { Sider, Content } = Layout;

export default function AdminLayout() {
  return (
    <Layout>
      
      <Sider>
        <SiderComponent />
      </Sider>
      <Layout>
        <AppHeader />
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Content
            style={{
              padding: "30px",
              background: "#ffffff",
              margin: "90px 20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Outlet />
          </Content>
        </div>
      </Layout>
    </Layout>
  );
}

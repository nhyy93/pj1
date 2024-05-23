import { Card } from "antd";
import { GroupOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";

const DashBoard = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Card style={{width: '19%', border: '1px solid gray', height: '8.5rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 style={{fontSize: '15px'}}>Total of accounts</h2>
          <UserOutlined
            style={{ fontSize: "25px", borderRadius: '0.25rem', padding: '0.25rem', color: '#3b82f6', backgroundColor: '#bfdbfe' }}
          />
        </div>
        <p style={{fontWeight: 'bold'}}>
          10
        </p>
      </Card>
      <Card style={{width: '19%', border: '1px solid gray', height: '8.5rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 style={{fontSize: '15px'}}>Total of diamonds</h2>
          <UserOutlined
            style={{ fontSize: "25px", borderRadius: '0.25rem', padding: '0.25rem', color: '#3b82f6', backgroundColor: '#bfdbfe' }}
          />
        </div>
        <p style={{fontWeight: 'bold'}}>
          10
        </p>
      </Card>
      <Card style={{width: '19%', border: '1px solid gray', height: '8.5rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 style={{fontSize: '15px'}}>Total of requests</h2>
          <UserOutlined
            style={{ fontSize: "25px", borderRadius: '0.25rem', padding: '0.25rem', color: '#3b82f6', backgroundColor: '#bfdbfe' }}
          />
        </div>
        <p style={{fontWeight: 'bold'}}>
          10
        </p>
      </Card>
      <Card style={{width: '19%', border: '1px solid gray', height: '8.5rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 style={{fontSize: '15px'}}>Total of payments</h2>
          <UserOutlined
            style={{ fontSize: "25px", borderRadius: '0.25rem', padding: '0.25rem', color: '#3b82f6', backgroundColor: '#bfdbfe' }}
          />
        </div>
        <p style={{fontWeight: 'bold'}}>
          10
        </p>
      </Card>
      <Card style={{width: '19%', border: '1px solid gray', height: '8.5rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 style={{fontSize: '15px'}}>Profit</h2>
          <UserOutlined
            style={{ fontSize: "25px", borderRadius: '0.25rem', padding: '0.25rem', color: '#3b82f6', backgroundColor: '#bfdbfe' }}
          />
        </div>
        <p style={{fontWeight: 'bold'}}>
          2.000.000 đ
        </p>
      </Card>
    </div>
  );
};

export default DashBoard;

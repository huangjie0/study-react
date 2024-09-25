import React from "react";
import { NavLink, useRoutes,useInRouterContext} from 'react-router-dom';
import routes from './routes'
import Header from "./components/Header";
import Count from "./components/Count";
import { Button, Flex , Divider } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function App() {
  console.log(useInRouterContext());
  //路由表
  const element = useRoutes(routes)

    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 路由注册 */}
                { element }
              </div>
            </div>
          </div>
        </div>
        <Flex gap="small" wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
          <HomeOutlined/>
        </Flex>
        <Divider />
        <Count/>
      </div>
    );
}

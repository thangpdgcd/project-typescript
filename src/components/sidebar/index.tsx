import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import Introduction from "../../pages/introduction/index"; // Ensure the path is correct
import Quickstart from "../../pages/quickstart";
import { Link } from "react-router-dom"; // Import Link component
import SubMenu from "antd/es/menu/SubMenu";
import { Image } from "antd";
import Search from "antd/es/transfer/search";
const { Sider, Header } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={256} theme='light'>
          <Image style={{ padding: 15 }}></Image>
          <div style={{ padding: 20, backgroundColor: "" }}>
            <input type='text' style={{ border: 2 }} />
          </div>

          <Menu mode='inline' defaultSelectedKeys={["1"]}>
            <SubMenu key='sub1' icon={<AppstoreOutlined />} title='Menu 1'>
              <Menu.Item key='1' icon={<AppstoreOutlined />}>
                <Link to='/introduction'>Introduction</Link>{" "}
              </Menu.Item>
              <SubMenu key='sub1-1' title='Developer'>
                <Menu.Item key='2' icon={<AppstoreOutlined />}>
                  <Link to='/quickstart'>Quickstart</Link>{" "}
                </Menu.Item>
              </SubMenu>
              <SubMenu key='sub1-2' title='Migration'>
                <Menu.Item key='3' icon={<AppstoreOutlined />}>
                  <Link to='/quickstart'>Quickstart</Link>{" "}
                </Menu.Item>
              </SubMenu>
              <SubMenu key='sub1-3' title='Recipes'>
                <Menu.Item key='4' icon={<AppstoreOutlined />}>
                  <Link to='/quickstart'>Quickstart</Link>{" "}
                </Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        <Routes>
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/quickstart' element={<Quickstart />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

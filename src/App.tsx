import { Layout } from "antd";
import "./App.scss";
import Sidebar from "./components/sidebar";
import { Link, Route, Routes } from "react-router-dom";
import Introduction from "./pages/introduction";

const { Content, Sider } = Layout;
const App = () => {
  return (
    <>
      <Layout hasSider className='app-container '>
        <Sider className='side-container'>
          <Sidebar />
        </Sider>
        <Content className='content-container' >
       <Introduction/>
        </Content>
      </Layout>
    </>
  );
};

export default App;

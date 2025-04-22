import { Layout, Menu, theme } from "antd";
import "./App.scss";
import Sidebar from "./components/sidebar";
import Introduction from "./pages/introduction";

const { Content, Footer, Sider } = Layout;
const App = () => {
  return (
    <>
      <Layout hasSider className='app-container '>
        <Sider className='side-container'>
          <Sidebar />
        </Sider>
        <Content className='content'>
          <Introduction />
        </Content>
      </Layout>
    </>
  );
};

export default App;

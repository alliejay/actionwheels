import React, { useState } from 'react'
import { Layout, Menu } from 'antd';

//components
import About from './About';
import Contact from './Contact';
import ProductSearch from '../components/ProductSearch';
import Warranty from './Warranty';
import ReviewPage from './Review';
import ReviewBanner from './Review/reviewBanner.js'

//images
import actionWheels from '../img/action_wheels.png';
import talonBanner from '../img/talon_banner.jpg';

//styles
import './styles.scss';

// constants
const { Header, Content, Footer } = Layout;

const ABOUT = 'actionwheels';
const CONTACT = 'contact';
const PRODUCTS = 'products';
const WARRANTY = 'warranty';
const RESOURCES = 'resources';
const REVIEW = 'review';

const PAGE_PATHS = Object.freeze({
  [ABOUT]: {
    path: `/${ABOUT}`,
    component: <About />
  },
  [CONTACT]: {
    path: `/${CONTACT}`,
    component: <Contact />
  },
  [PRODUCTS]: {
    path: `/${PRODUCTS}`,
    component: <ProductSearch />
  },
  [WARRANTY]: {
    path: `/${WARRANTY}`,
    component: <Warranty/>
  },
  [RESOURCES]: {
    path: `/${RESOURCES}`
  },
  [REVIEW]: {
    path: `/${REVIEW}`,
    component: <ReviewPage />
  }
});

const ActionWheels = (props) => {
  const [selectedPage, setSelectedPage] = useState('actionwheels');

  const renderComponent = ({key}) => {
    setSelectedPage(key)
  };

  console.log("window.location.pathname", window.location.pathname)

  return (
    <Layout theme="light">
      <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <img src={actionWheels} className="actionSiteLogo"/>
        <Menu className="navigationMenu" theme="light" mode="horizontal" defaultSelectedKeys={['actionwheels']} onSelect={({key}) => renderComponent({key})}>
          <Menu.Item className="menuItem" key="actionwheels">ABOUT</Menu.Item>
          <Menu.Item className="menuItem" key="contact">CONTACT</Menu.Item>
          <Menu.Item className="menuItem" key="products">PRODUCTS</Menu.Item>
          <Menu.Item className="menuItem" key="warranty">WARRANTY</Menu.Item>
          <Menu.Item className="menuItem" key="resources">RESOURCES</Menu.Item>
        </Menu>
      </Header>
      <img src={talonBanner} className="actionWheelsBanner" />
      {window.location.pathname === `/${REVIEW}` && <ReviewBanner/>}
      <Content className="site-layout contentBox" style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 24, minHeight: 380 }}>
          {window.location.pathname === `/${REVIEW}` ? <ReviewPage /> : PAGE_PATHS[selectedPage]['component']}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© Action Wheels</Footer>
    </Layout>
  )
};

export default ActionWheels;

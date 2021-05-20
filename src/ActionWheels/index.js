import React, { useState, useEffect } from 'react'
import { Layout, Menu, Dropdown } from 'antd';

//components
import About from './About';
import Contact from './Contact';
import ProductSearch from '../components/ProductSearch';
import Warranty from './Warranty';
import ReviewPage from './Review';
import ReviewBanner from './Review/reviewBanner.js'

//images
import actionWheels from '../img/action_wheels.png';
import actionWheelsInv2 from '../img/action_wheels.inv2.png';
import talonBanner from '../img/talon_banner.jpg';
import {
  MenuOutlined
} from '@ant-design/icons';

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

const ActionWheels = () => {
  const [selectedPage, setSelectedPage] = useState('actionwheels');
  const [defaultSelectedKey, setDefaultSelectedKey] = useState([]);

  const renderComponent = ({key}) => {
    setSelectedPage(key)
  };

  const createMenu = (mode) => {
    return (
      <Menu className="navigationMenu" theme="light" mode={mode} defaultSelectedKeys={defaultSelectedKey}>
        <Menu.Item className="menuItem" key="actionwheels" onClick={({key}) => renderComponent({key})}>ABOUT</Menu.Item>
        <Menu.Item className="menuItem" key="contact" onClick={({key}) => renderComponent({key})}>CONTACT</Menu.Item>
        <Menu.Item className="menuItem" key="products" onClick={({key}) => renderComponent({key})}>PRODUCTS</Menu.Item>
        <Menu.Item className="menuItem" key="warranty" onClick={({key}) => renderComponent({key})}>WARRANTY</Menu.Item>
        <Menu.Item className="menuItem" key="review" onClick={({key}) => renderComponent({key})}>REVIEW</Menu.Item>
      </Menu>
    )
  };

  useEffect(() => {
    if(window.location.pathname === `/${REVIEW}/`) {
      setSelectedPage(REVIEW)
    } else {
      setDefaultSelectedKey(['actionwheels']);
    }
  }, []);

  return (
    <Layout theme="light">
      <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <img src={actionWheels} className="actionSiteLogo" id="desktopLogo"/>
        <img src={actionWheelsInv2} className="actionSiteLogo" id="mobileLogo"/>
        <span className="bigMenu">
          {createMenu("horizontal")}
        </span>
        <div className="hamburgerNav">
          <Dropdown overlay={createMenu("vertical")}>
            <a className="ant-dropdown-link">
              <MenuOutlined className="hamburgerMenu" />
            </a>
          </Dropdown>
        </div>
      </Header>
      <img src={talonBanner} className="actionWheelsBanner" />
      {selectedPage === REVIEW && <ReviewBanner/>}
      <Content className="site-layout contentBox" style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 24, minHeight: 380 }}>
          {PAGE_PATHS[selectedPage]['component']}
        </div>
      </Content>
      <Footer className="actionWheelsFooter" style={{ textAlign: 'center' }} />
    </Layout>
  )
};

export default ActionWheels;

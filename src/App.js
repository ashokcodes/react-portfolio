import React from 'react';
import './App.css';
import pdf from "./static/ashok-resume.pdf";
import Main from "./main";
import { Layout, Navigation, Header, Content, Drawer } from "react-mdl";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
        <Layout accent fixedHeader>
          <Header title={<a className="name-menu" href="/"><span style={{ color: '#ddd' }}>Ashok Mohanakumar</span></a>}>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <Link to="/">Home</Link>
              <a href={pdf}>Resume</a>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />>
              <Footer size="mini">
              <FooterSection type="left" logo="Copyright 2019">
                <FooterLinkList>
                  <a href="https://twitter.com/ashokcodes">Twitter</a>
                  <a href="https://github.com/ashokcodes">Github</a>
                  <a href="https://www.linkedin.com/in/ashokcodes/">LinkedIn</a>
                  <Link to="/privacy-policy">Privacy & Terms</Link>
                </FooterLinkList>
              </FooterSection>
            </Footer>
          </Content>
        </Layout>
      </div>
    </div >
  );
}

export default App;

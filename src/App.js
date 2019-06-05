import React from 'react';
import './App.css';
import { Layout, Navigation, Header, Content, Drawer } from "react-mdl";
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from "react-mdl";


function App() {
  return (
    <div className="App">
      <div>
        <Layout accent fixedHeader>
          <Header title={<a className="name-menu" href="/"><span style={{ color: '#ddd' }}>Ashok Mohanakumar</span></a>}>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <a href="/resume">Resume</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="profileCard">
              <Grid>
                <Cell col={5} >
                  <img alt="Ashok Mohanakumar" src="https://res.cloudinary.com/practicaldev/image/fetch/s--8ukqAeUF--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/87072/a2e770a6-91da-491f-92c6-0b8a15943a34.jpg" />
                </Cell>
                <Cell col={7} >
                  <h3 className="name">Ashok<br />Mohanakumar</h3>
                  <p className="profile-sub-text">Full Stack Dev</p>
                </Cell>
              </Grid>
            </div>
            <div>
              <Grid className="main-card">
                <Cell className="cell-left" col={4}>
                  <h5>skills</h5>
                  <p className="card-content">NODE&nbsp;&nbsp;|&nbsp;&nbsp;ANGULAR&nbsp;&nbsp;|&nbsp;&nbsp;REACT</p>
                </Cell>
                <Cell className="cell-right" col={8}>
                  <h5>work</h5>
                  <p className="card-content">Senior Software Engineer at <span><a rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }} href="https://askerbot.com/">ASKERBOT</a></span></p>
                  <h5 style={{ marginTop: '2rem' }}>location</h5>
                  <p className="card-content">Trivandrum, India</p>
                </Cell>
              </Grid>
            </div>
            <Footer size="mini">
              <FooterSection type="left" logo="Copyright 2019">
                <FooterLinkList>
                  <a href="https://twitter.com/ashokcodes">Twitter</a>
                  <a href="https://github.com/ashokcodes">Github</a>
                  <a href="https://www.linkedin.com/in/ashokcodes/">LinkedIn</a>
                  <a href="#">Privacy & Terms</a>
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

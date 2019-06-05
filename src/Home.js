import React, { Component } from "react";

import { Grid, Cell } from "react-mdl";

class Home extends Component {
    render() {
        return (
            <div>
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
                <div style={{ padding: "3rem" }} className="profileCard"></div>
            </div>
        )
    }
}

export default Home
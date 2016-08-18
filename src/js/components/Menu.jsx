import React, {Component} from 'react';
import {Link} from 'react-router';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            street: '',
            state: '',
            city: ''
        }

        // this.updateInputs = this.updateInputs.bind(this);
    }

    updateInputs(key, event) {}

    render() {
        return (
            <div className="MenuComp">
                <div className="upperbox">
                    <div>
                        <h1 className="title">Joe Santos Garcia</h1>
                        <h3 className="sub-title">Frontend Engineer</h3>
                    </div>
                </div>

                <nav className="navigation">
                    <Link to="work">Work</Link>
                    <Link to="projects">Personal Projects</Link>
                    <Link to="joe_santos_resume.pdf" target="new">Resume</Link>
                    <Link to="/">Skills</Link>
                    <Link to="/">Contacts</Link>
                </nav>
            </div>
        )
    }
}

export default Menu;

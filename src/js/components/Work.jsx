import React, {Component} from 'react';
class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            street: '',
            state: '',
            city: ''
        }

        // this.updateInputs = this.updateInputs.bind(this);
    }
    componentDidMount() {
        //  var x = ReactDOM.findDOMNode(this.refs.author);
        var tl = new TimelineLite();

        const $WorkComp = $('.WorkComp');
        const $upperbox = $('.upperbox');
        const $navigation = $('.navigation');

        tl.to($WorkComp, 0, {
            className: '+=start',
            delay: 1
        }).to($upperbox, .3, {className: '+=start'}).to($navigation, .3, {
            className: '+=start',
            delay: .4
        });
        // $body, {className: '-=loading'}
    }

    updateInputs(key, event) {}

    render() {
        return (
            <div className="WorkComp">
                    <div className="row box ">
                        <div className="col-md-6 ">
                            <img src="img/epa/epa-imac.png " width="100% "/>
                        </div>
                        <div className="col-md-6 ">
                            <h1>EPA RRP Online
                            </h1>
                            <p>
                                <strong>Target:</strong>
                                <a href="https://www.eparrponline.com/" target="new">https://www.eparrponline.com/</a>
                            </p>
                            <p>
                                <strong>Company:</strong>
                                Able Safety LLC.</p>
                            <p>
                                <strong>Description:</strong>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare orci nisi, at tristique libero varius quis. Fusce placerat elit eget feugiat vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu interdum nisi. Curabitur felis tortor, luctus vel mauris a, consectetur pharetra urna. Pellentesque at dui quis tellus luctus consectetur. Sed diam est, elementum ac rutrum at, posuere vel nibh. Nunc ultrices tempus ultrices. Aenean molestie urna et diam ultrices mollis. Maecenas ultrices ante id neque porttitor molestie.</p>
                        </div>
                    </div>

                    <div className="row box ">
                        <div className="col-md-6 ">
                            <img src="img/epa/asme-imac.png" width="100% "/>
                        </div>
                        <div className="col-md-6 ">
                            <h1>The American Society of Mechanical Engineers</h1>
                            <p>
                                <strong>Target:</strong>
                                <a href="https://www.asme.org/" target="new">https://www.asme.org/</a>
                            </p>
                            <p>
                                <strong>Company:</strong>
                                ASME Corp.</p>
                            <p>
                                <strong>Description:</strong>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare orci nisi, at tristique libero varius quis. Fusce placerat elit eget feugiat vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu interdum nisi. Curabitur felis tortor, luctus vel mauris a, consectetur pharetra urna. Pellentesque at dui quis tellus luctus consectetur. Sed diam est, elementum ac rutrum at, posuere vel nibh. Nunc ultrices tempus ultrices. Aenean molestie urna et diam ultrices mollis. Maecenas ultrices ante id neque porttitor molestie.</p>
                        </div>
                    </div>

                    <div className="row box ">
                        <div className="col-md-6 ">
                            <img src="img/epa/omni-imac.png " width="100% "/>
                        </div>
                        <div className="col-md-6 ">
                            <h1>Omni Fitness Center</h1>
                            <p>
                                <strong>Target:</strong>
                                <a href="http://www.theomnifitnesscenter.com/" target="new">http://www.theomnifitnesscenter.com/</a>
                            </p>
                            <p>
                                <strong>Company:</strong>
                                Omni Group.</p>
                            <p>
                                <strong>Description:</strong>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare orci nisi, at tristique libero varius quis. Fusce placerat elit eget feugiat vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu interdum nisi. Curabitur felis tortor, luctus vel mauris a, consectetur pharetra urna. Pellentesque at dui quis tellus luctus consectetur. Sed diam est, elementum ac rutrum at, posuere vel nibh. Nunc ultrices tempus ultrices. Aenean molestie urna et diam ultrices mollis. Maecenas ultrices ante id neque porttitor molestie.</p>
                        </div>
                    </div>

            </div>
        )
    }
}

export default Work;

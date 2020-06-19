import React from 'react';
import Slideshow from 'react-native-image-slider-show';
export default class SlideshowTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    url: 'https://www.chotot.com/kinhnghiem/wp-content/uploads/2018/06/cho-alaska-standard-cho-tot.jpg',
                },
                {
                    url: 'https://giongthuanchung.com/wp-content/uploads/2019/01/Samoyed-lai-Alaska-2.jpg   ',
                },
                {
                    url: 'https://trumboss.vn/wp-content/uploads/2018/11/giong-cho-Alaskan-Malamute.jpg',
                },
            ],
        };
    }

    // componentDidMount() {
    //     const { img } = this.props.route.params;
    //     console.log(img);

    //     this.setState({
    //         dataSource: img
    //     })
    // }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 4000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <Slideshow
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })} />
        );
    }
}
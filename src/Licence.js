import React from 'react';
import SVG from 'svg.js';
import './App.css';
import Flip from 'react-reveal/Flip';

class Licence extends  React.Component {


    componentDidMount() {
        this.draw = SVG('drawing').size(600, 200);
        var rect =this.draw.rect(546, 114).fill('#000').radius(5);
        rect =this.draw.rect(538,106).fill('#fff').move(4,4);

        rect =this.draw.rect(46,106).fill('#003399').move(4,4);

        rect =this.draw.rect(34,13).fill('#43ACE2').move(9,26);
        rect =this.draw.rect(34,13).fill('#FADE0F').move(9,39);
        var text =this.draw.text('UA');
        text.move(11,70).font({ fill: '#fff', family: 'Lato', size: 22 });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        var rect =this.draw.rect(546, 114).fill('#000').radius(5);
        rect =this.draw.rect(538,106).fill('#fff').move(4,4);

        rect =this.draw.rect(46,106).fill('#003399').move(4,4);

        rect =this.draw.rect(34,13).fill('#43ACE2').move(9,26);
        rect =this.draw.rect(34,13).fill('#FADE0F').move(9,39);
        var text =this.draw.text('UA');
        text.move(11,70).font({ fill: '#fff', family: 'Lato', size: 22 });
        var numbers =this.draw.text(this.props.number); //'AK 9265 AK'
        numbers.move(60,-18).font({fill: '#000', family: 'Oxygen', size: 87});

    }

    render() {
        return (

            <Flip top duration={1000} when={this.props.changed}>
                <div id="drawing"></div>
            </Flip>
        );
    }
}

export default Licence;

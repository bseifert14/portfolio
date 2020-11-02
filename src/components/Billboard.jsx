import React, { Component } from 'react'
import mtSnowColor from '../static/images/mtsnow-color.jpeg';
import mtSnowBW from '../static/images/mtsnow-bw.jpeg';
import chsBridgeColor from '../static/images/ravanel-bridge-color.jpeg';
import chsBridgeBW from '../static/images/ravanel-bridge-bw.jpeg';
import ReactCompareImage from 'react-compare-image';

const imageSettings = {
  'width': '100%',
  'height': 'auto'
}

class BillBoard extends React.Component {
  render() {
    return (
      <div>
        <ReactCompareImage
          leftImage={mtSnowColor}
          rightImage={mtSnowBW}
          rightImageCss={imageSettings}
          leftImageCss={imageSettings}
          handleSize={50}/>
          <ReactCompareImage
            leftImage={chsBridgeBW}
            rightImage={chsBridgeColor}
            rightImageCss={imageSettings}
            leftImageCss={imageSettings}
            handleSize={50}/>
      </div>
    );
  }
}

export default BillBoard;

import React from 'react'
import mtSnowColor from '../static/images/mtsnow-color.jpeg';
import mtSnowBW from '../static/images/mtsnow-bw.jpeg';
import chsBridgeColor from '../static/images/ravanel-bridge-color.jpeg';
import chsBridgeBW from '../static/images/ravanel-bridge-bw.jpeg';
import follyBeachColor from '../static/images/folly-beach-color.jpeg';
import follyBeachBW from '../static/images/folly-beach-bw.jpeg';
import batteryColor from '../static/images/battery-color.jpeg';
import batteryBW from '../static/images/battery-bw.jpeg';
import hyannisPortColor from '../static/images/hyannis-port-color.jpeg';
import hyannisPortBW from '../static/images/hyannis-port-bw.jpeg';
import georgeColor from '../static/images/george-color.jpeg';
import georgeBW from '../static/images/george-bw.jpeg';
import angelOakColor from '../static/images/angel-oak-color.jpeg';
import angelOakBW from '../static/images/angel-oak-bw.jpeg';



import ReactCompareImage from 'react-compare-image';

const imageSettings = {
  'width': '100%',
  'height': 'auto'
}

class BillBoard extends React.Component {
  render() {
    return (
      <div>
        <div id="firstImage">
          <ReactCompareImage
            leftImage={mtSnowColor}
            rightImage={mtSnowBW}
            rightImageCss={imageSettings}
            leftImageCss={imageSettings}
            handleSize={50}/>
        </div>

        <ReactCompareImage
          leftImage={chsBridgeBW}
          rightImage={chsBridgeColor}
          rightImageCss={imageSettings}
          leftImageCss={imageSettings}
          handleSize={50}/>

        <ReactCompareImage
          leftImage={follyBeachColor}
          rightImage={follyBeachBW}
          rightImageCss={imageSettings}
          leftImageCss={imageSettings}
          handleSize={50}/>

        <ReactCompareImage
          leftImage={batteryBW}
          rightImage={batteryColor}
          rightImageCss={imageSettings}
          leftImageCss={imageSettings}
          handleSize={50}/>

        <ReactCompareImage
          leftImage={hyannisPortColor}
          rightImage={hyannisPortBW}
          rightImageCss={imageSettings}
          leftImageCss={imageSettings}
          handleSize={50}/>

        <ReactCompareImage
          leftImage={georgeBW}
          rightImage={georgeColor}
          rightImageCss={imageSettings}
          leftImageCss={imageSettings}
          handleSize={50}/>

        <ReactCompareImage
          leftImage={angelOakColor}
          rightImage={angelOakBW}
          rightImageCss={imageSettings}
          leftImageCss={imageSettings}
          handleSize={50}/>
      </div>
    );
  }
}

export default BillBoard;

import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import BPLComponents from "../Common/BPLComponents";

import { withSelect } from '@wordpress/data';



const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;

  
  // const { } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} device={device} id={`block-${clientId}`} />

         <BPLComponents attributes={attributes} setAttributes={setAttributes}/>
     
      </div>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType } = select('core/editor');
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);

import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import {
  BoxControl,
  BtnGroup,
  ColorControl,
  ColorsControl,
  CustomCodeEditor,
  HexColorControl,
} from "../../../../../../bpl-tools/Components";
// import {  } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const { boxValues, option, textColor,colors,cssCode } = attributes;
 
  
  const resetValues = { top: 0, right: 0, bottom: 0, left: 0 };

  const options = [
    { label: __("Primary", "b-blocks"), value: "#FFFF00" },
    { label: __("Secondary", "b-blocks"), value: "#00FF00" },
  ];

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("BPL Tools Components", "b-blocks")}
        initialOpen={false}
      >
        {/* BoxControl */}
        <BoxControl
          label="Padding/Margin korte parbo"
          values={boxValues}
          resetValues={resetValues}
          // sides={["horizontal","vertical"]}
          // disableUnits={false}
          onChange={(newValues) => setAttributes({ boxValues: newValues })}
        />

        {/*BtnGroup */}
        <BtnGroup
          label="BG Color"
          size="small"
          // icon={true}
          value={option?.color}
          onChange={(val) => {
            setAttributes({ option: { ...option, color: val } });
          }}
          options={options}
        />

        {/* ColorControl Start */}
        <ColorControl
          label="text Color"
          defaultColor="#000000"
          value={textColor.color}
          onChange={(textColor) => {
            setAttributes({
              textColor: { ...textColor, color: textColor },
            });
          }}
        />
        <HexColorControl
          label="Button Color"
          defaultColor="#6600FF"
          value={textColor?.hexColor}
          onChange={(hex) => {
            setAttributes({
              textColor: { ...textColor, hexColor: hex },
            });
          }}
        />
        {/* ColorControl End */}
        

        {/* ColorsControl */}
        <ColorsControl 
        value={colors} onChange={val => setAttributes({ colors: val })} defaults={{ color: '#333', bg: '#DC4C64' }} 
        />

        {/* CustomCodeEditor */}
        <CustomCodeEditor 
        value={cssCode} 
        onChange={(val)=>setAttributes({cssCode:val})} 
        height="300px" 
        width="100%"
        />
      </PanelBody>
    </>
  );
};

export default Style;

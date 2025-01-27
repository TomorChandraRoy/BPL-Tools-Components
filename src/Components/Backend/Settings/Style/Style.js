import { __ } from "@wordpress/i18n";
import { useState } from "react";
import { PanelBody, PanelRow, RangeControl } from "@wordpress/components";
import {
  BoxControl,
  BtnGroup,
  ColorControl,
  ColorsControl,
  CustomCodeEditor,
  HexColorControl,
  Label,
} from "../../../../../../bpl-tools/Components";
import { BDevice, BorderControl } from "../../../../../../bpl-tools/Components/Deprecated";
// import {  } from "../../../../../../bpl-tools/Components";


const Style = ({ attributes, setAttributes }) => {
  const { boxValues, option, textColor, colors, cssCode, columns,border } = attributes;


  const resetValues = { top: 0, right: 0, bottom: 0, left: 0 };

  const options = [
    { label: __("Primary", "b-blocks"), value: "#FFFF00" },
    { label: __("Secondary", "b-blocks"), value: "#00FF00" },
  ];

  const [device, setDevice] = useState('desktop');

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
          onChange={(val) => setAttributes({ cssCode: val })}
          height="300px"
          width="100%"
        />


        {/* BDevice */}
        <PanelRow>
          <Label className='mb5'>{__('Columns:', 'text-domain')}</Label>
          <BDevice device={device} onChange={val => setDevice(val)} />
        </PanelRow>
        <RangeControl value={columns[device]} onChange={val => setAttributes({ columns: { ...columns, [device]: val } })} min={1} max={6} step={1} beforeIcon='grid-view' />
      </PanelBody>

      <BorderControl label={__('Border:', 'text-domain')} value={border} onChange={val => setAttributes({ border: val })}  
               defaults={{width: '1px',  style: 'solid', color: '#000000',side: 'all',radius: '0px'}} 
      />
    </>
  );
};

export default Style;

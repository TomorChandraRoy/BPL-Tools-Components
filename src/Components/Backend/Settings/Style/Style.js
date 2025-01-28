import { __ } from "@wordpress/i18n";
import { useState } from "react";
import { PanelBody, PanelRow, RangeControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import {
  BoxControl,
  BtnGroup,
  ColorControl,
  ColorsControl,
  CustomCodeEditor,
  Device,
  HexColorControl,
  Label,
  ShadowControl,
  SolidBackground,
  SortableControl,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { BDevice, BorderControl, ChangeImageData, ImageEditControl, ImageHolderControl, ImagePlaceholder } from "../../../../../../bpl-tools/Components/Deprecated";


// import {  } from "../../../../../../bpl-tools/Components";

import { perUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";
import { updateData } from "../../../../../../bpl-tools/utils/functions";


const Style = ({ attributes, setAttributes, device }) => {

  const { boxValues, option, textColor, colors, cssCode, columns, border, image, width, typography, items, backgroundColor,shadow } = attributes;


  const resetValues = { top: 0, right: 0, bottom: 0, left: 0 };

  const options = [
    { label: __("Primary", "b-blocks"), value: "#FFFF00" },
    { label: __("Secondary", "b-blocks"), value: "#00FF00" },
  ];

  const [devicee, setDevice] = useState('desktop');

  const onChangeImage = (newImage) => {
    setAttributes({ image: newImage });
  };


  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("BPL Tools Components", "b-blocks")}
        initialOpen={false}
      >
        <PanelBody
          className="bPlPanelBody"
          title={__("BoxControl", "b-blocks")}
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
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("BtnGroup Components", "b-blocks")}
          initialOpen={false}
        >
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
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("ColorControl/HexColorControl", "b-blocks")}
          initialOpen={false}
        >
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
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("ColorsControl Components", "b-blocks")}
          initialOpen={false}
        >
          {/* ColorsControl */}
          <ColorsControl
            value={colors} onChange={val => setAttributes({ colors: val })} defaults={{ color: '#333', bg: '#DC4C64' }}
          />
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("CustomCodeEditorComponents", "b-blocks")}
          initialOpen={false}
        >
          {/* CustomCodeEditor */}
          <CustomCodeEditor
            value={cssCode}
            onChange={(val) => setAttributes({ cssCode: val })}
            height="300px"
            width="100%"
          />

        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("BDevice Components", "b-blocks")}
          initialOpen={false}
        >
          {/* BDevice */}
          <PanelRow>
            <Label className='mb5'>{__('Columns:', 'text-domain')}</Label>
            <BDevice device={devicee} onChange={val => setDevice(val)} />
          </PanelRow>
          <RangeControl value={columns[device]} onChange={val => setAttributes({ columns: { ...columns, [device]: val } })} min={1} max={6} step={1} beforeIcon='grid-view' />
        </PanelBody>


        <PanelBody
          className="bPlPanelBody"
          title={__("Responsive Components", "b-blocks")}
          initialOpen={false}
        >
          {/* Responsive */}
          <PanelRow>
            <Label className=''>Width</Label>
            <Device />
          </PanelRow>
          <UnitControl
            value={width[device]}
            onChange={(v) => setAttributes({ width: updateData(width, v, device) })}
            units={[pxUnit(), perUnit()]}
          />
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("BorderControl Components", "b-blocks")}
          initialOpen={false}
        >
          {/*BorderControl  */}
          <BorderControl label={__('Border:', 'text-domain')} value={border} onChange={val => setAttributes({ border: val })}
            defaults={{ width: '1px', style: 'solid', color: '#000000', side: 'all', radius: '0px' }}
          />
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("ImageControl Components", "b-blocks")}
          initialOpen={false}
        >

          {/* If no image, show the placeholder */}
          {!image?.url && (
            <ImagePlaceholder
              label="Upload an Image"
              value={image}
              onChange={onChangeImage}
            />
          )}

          {/* Show image control if image exists */}
          {image?.url && (
            <>
              <ImageHolderControl
                label="Upload an Image"
                value={image}
                onChange={onChangeImage}
              />
              <ChangeImageData
                value={image}
                onChange={onChangeImage}
              />
              <ImageEditControl
                label="Edit Image"
                value={image}
                onChange={onChangeImage}
              />
            </>
          )}
        </PanelBody>



        {/* <PanelBody
          className="bPlPanelBody"
          title={__(" Gradient Components", "b-blocks")}
          initialOpen={false}
        >
          <Gradient
            value={gradientValue}
            onChange={(newGradient) => setAttributes({ gradientValue: newGradient })} />
        </PanelBody> */}

        <PanelBody
          className="bPlPanelBody"
          title={__("Typography Components", "b-blocks")}
          initialOpen={false}
        >
          <Typography label={__('Label', 'b-blocks')} value={typography} onChange={val => setAttributes({ typography: val })}
          />

        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("SortableControl Components", "b-blocks")}
          initialOpen={false}
        >
          <SortableControl
            label="Sort items:"
            value={items}
            onChange={item => setAttributes({ items: item })}
          />
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("SolidBackground Components", "b-blocks")}
          initialOpen={false}
        >
            <SolidBackground
              label="Background Color"
              value={backgroundColor}
              onChange={(value) => setAttributes({ backgroundColor: value })}
            />
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("ShadowControl Components", "b-blocks")}
          initialOpen={false}
        >
            <ShadowControl
              label="Shadow"
              value={shadow}
              onChange={(shado)=>setAttributes({shadow:shado})}
            />
        </PanelBody>

      </PanelBody>

    </>
  );
};

export default Style;

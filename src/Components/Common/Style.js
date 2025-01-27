// import {  } from "../../../../bpl-tools/utils/getCSS";


const Style = ({ attributes, id }) => {
  const { boxValues, option, textColor, colors ,border} = attributes;

  let borderStyle = '';

  if (border?.side === 'all') {
    borderStyle = `border: ${border?.width || '1px'} ${border?.style || 'solid'} ${border?.color || '#000000'};`;
  } else {
    const sideStyles = {
      top: `border-top: ${border?.width || '1px'} ${border?.style || 'solid'} ${border?.color || '#000000'};`,
      right: `border-right: ${border?.width || '1px'} ${border?.style || 'solid'} ${border?.color || '#000000'};`,
      bottom: `border-bottom: ${border?.width || '1px'} ${border?.style || 'solid'} ${border?.color || '#000000'};`,
      left: `border-left: ${border?.width || '1px'} ${border?.style || 'solid'} ${border?.color || '#000000'};`,
    };

    const multiSideStyles = {
      topRight: `${sideStyles.top} ${sideStyles.right}`,
      topBottom: `${sideStyles.top} ${sideStyles.bottom}`,
      topLeft: `${sideStyles.top} ${sideStyles.left}`,
      topRightBottom: `${sideStyles.top} ${sideStyles.right} ${sideStyles.bottom}`,
      topRightLeft: `${sideStyles.top} ${sideStyles.right} ${sideStyles.left}`,
      topBottomLeft: `${sideStyles.top} ${sideStyles.bottom} ${sideStyles.left}`,
      rightBottom: `${sideStyles.right} ${sideStyles.bottom}`,
      rightLeft: `${sideStyles.right} ${sideStyles.left}`,
      rightBottomLeft: `${sideStyles.right} ${sideStyles.bottom} ${sideStyles.left}`,
      bottomLeft: `${sideStyles.bottom} ${sideStyles.left}`,
    };

    borderStyle = sideStyles[border?.side] || multiSideStyles[border?.side] || '';
  }
  
    
  const borderRadius = border?.radius || '0px';

  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksTestPurpose`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

          ${blockSl} p {
            color: ${textColor?.color};
            padding: ${boxValues.top} ${boxValues.right} ${boxValues.bottom} ${boxValues.left};
            background-color: aquamarine;
            ${borderStyle};
            border-radius: ${borderRadius};
          }
          ${blockSl} .btn {
            background-color: ${option?.color};
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            color: ${textColor?.hexColor};
          }
          ${blockSl} .colorBG {
            color: ${colors?.color};
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            margin-left: 10px;
            background-color: ${colors?.bg};
          }
        `,
      }}
    />
  );
};

export default Style;


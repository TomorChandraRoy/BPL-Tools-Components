import { getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id, device = "desktop" }) => {
  const { boxValues, option, textColor, colors, border, width, typography,backgroundColor,shadow } =
    attributes;

  const { fontFamily, fontCategory, fontSize, fontVariant, fontWeight, textDecoration, textTransform, fontStyle, letterSpace,lineHeight} = typography
  console.log(typography);



  // #BorderControl Components Start
  let borderStyle = "";

  if (border?.side === "all") {
    borderStyle = `border: ${border?.width || "1px"} ${border?.style || "solid"
      } ${border?.color || "#000000"};`;
  } else {
    const sideStyles = {
      top: `border-top: ${border?.width || "1px"} ${border?.style || "solid"} ${border?.color || "#000000"
        };`,
      right: `border-right: ${border?.width || "1px"} ${border?.style || "solid"
        } ${border?.color || "#000000"};`,
      bottom: `border-bottom: ${border?.width || "1px"} ${border?.style || "solid"
        } ${border?.color || "#000000"};`,
      left: `border-left: ${border?.width || "1px"} ${border?.style || "solid"
        } ${border?.color || "#000000"};`,
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

    borderStyle =
      sideStyles[border?.side] || multiSideStyles[border?.side] || "";
  }

  const borderRadius = border?.radius || "0px";
  // #BorderControl Components End

  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksTestPurpose`;
  const typogra = `${blockSl} .typo`;
  const SolidBackg = `${blockSl} .SolidBackground`;
  const ShadowContro = `${blockSl} .ShadowControl`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

  	${getTypoCSS("", typography)?.googleFontLink}
	  ${getTypoCSS("typogra", typography)?.styles}

          ${blockSl} p {
            color: ${textColor?.color};
            padding: ${boxValues.top} ${boxValues.right} ${boxValues.bottom} ${boxValues.left
          };
            background-color: aquamarine;

            ${borderStyle};
            border-radius: ${borderRadius};

            width:${width[device]};
          }

       @media only screen and (min-width:641px) and (max-width: 1024px){
            ${blockSl} p {
                width: ${width.tablet};
            }
       }
       @media only screen and (max-width: 641px){
            ${blockSl} p {
                width: ${width.mobile};
            }
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
          ${SolidBackg}{
           background-color:${backgroundColor};
           padding:20px;
          }
          ${ShadowContro}{
            box-shadow: ${shadow.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ')};
            padding: 20px;
          }
          }
            ${typogra} {
               font-family:${fontFamily},${fontCategory};
               font-size:${fontSize[device]}px;
               font-style:${fontStyle};
               font-weight: ${fontWeight};
               text-transform: ${textTransform};
               text-decoration: ${textDecoration};
               letter-spacing: ${letterSpace};
               font-variant: ${fontVariant};
               line-height: ${lineHeight};
               background-color: rgba(255, 99, 71, 0.6);
               padding: 20px;

            }
            @media only screen and (min-width: 641px) and (max-width: 1024px) {
             ${typogra} {
                font-size: ${fontSize.tablet}px;
              }
            }
           @media only screen and (max-width: 641px) {
             ${typogra} {
               font-size: ${fontSize.mobile}px;
             }
           }
        `,
      }}
    />
  );
};

export default Style;

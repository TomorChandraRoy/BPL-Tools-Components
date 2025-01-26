// import {  } from "../../../../bpl-tools/utils/getCSS";


const Style = ({ attributes, id }) => {
  const { boxValues, option, textColor, colors } = attributes;


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


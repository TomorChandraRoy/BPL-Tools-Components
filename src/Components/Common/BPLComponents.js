import React from 'react';

const BPLComponents = ({attributes}) => {

  const {cssCode}=attributes;
  console.log(cssCode);
  

  return (
    <div>
      <div className="bBlocksTestPurpose">
        <p>
          Every text is written for a reason. For example, every text message
          you send has a purpose, whether that is to let your mum know when you
          will be home. Distinctively facilitate compelling technology vis-a-vis worldwide ideas. Credibly synthesize top-line solutions before corporate expertise.
        </p>
        <button className='btn'>Color/BGColor</button>
        <button className='colorBG'>RIPON</button>
      </div>
      <p>{cssCode}</p>
    </div>



  );
};

export default BPLComponents;
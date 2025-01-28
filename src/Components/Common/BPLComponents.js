import React from 'react';

const BPLComponents = ({ attributes }) => {

  const { cssCode, items } = attributes;




  // #Gradient Components Start


  //##Gradient Components End

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


        <div>
          <h2>Typography :</h2>
          <div className='typo'>
            Distinctively facilitate compelling technology vis-a-vis worldwide ideas.
            Credibly synthesize top-line solutions before corporate expertise.
          </div>
        </div>

        <h3>Drag and drop/ SortableControl :</h3>
        <ul >
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
 
          <h2>SolidBackground :</h2>
          <div className='SolidBackground'>
             Quickly empower multifunctional schemas and client-centered products.
          </div>


          <h2>ShadowControl :</h2>
          <div className='ShadowControl'>
             Quickly empower multifunctional schemas and client-centered products.
          </div>

      </div>
      <p>{cssCode}</p>

    </div>



  );
};

export default BPLComponents;
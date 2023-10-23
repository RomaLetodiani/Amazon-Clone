import React from 'react';
import ReactLoading from 'react-loading';

const Loading = (props) => {
  return (
    <div className={`flex justify-center items-center ${props.minH}`}>
      <ReactLoading
        color={'#febd69'}
        type={'spinningBubbles'}
        height={'100%'}
        width={'clamp(250px,40vw,600px)'}
      />
      <h1 className="p-3 rounded-full border-4 border-[#febd69] absolute font-bold text-xl text-[#f3a744]">
        {props.text}
      </h1>
    </div>
  );
};

export default Loading;

import React from 'react';

export default function SubOptions(props) 
{
  const { options, toExpand } = props;
  return (
    <div className={`sub-options-container ${toExpand ? 'expand' : ''}`}>
      <div className="sub-options-inner">
        {options.map((option) => (<h3><a href=" " alt='sub-options'>{option}</a></h3>))}
      </div>
    </div>
  );
}

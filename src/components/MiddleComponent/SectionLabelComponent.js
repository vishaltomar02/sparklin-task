import React from 'react';
import ChevronIcon from '../../svgs/chevron-icon-svg';

export default function SectionLabelComponent(props) 
{
  return(
    <section className="section-label-container">
      <div className="label">
        {props.name}
        {props.chevron && <span style={{marginLeft: '20px'}}><ChevronIcon/></span>}
      </div>
      <div className="view-all">View All</div>
    </section>
  )
}
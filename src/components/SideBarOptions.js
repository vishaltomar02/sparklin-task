import React, { useState } from 'react';
import SubOptions from './SubOptions';

const subOptions = [
  'Direct Tax laws',
  'International Taxation',
  'Indirect Tax Laws',
  'Insolvency and Bankruptcy Code',
  'GST',
  'Accounts and Audit',
  'Banking & Insurance',
  'Bare Acts'
]

export default function SideBarOptions({option}) {

  const [toExpand, setExpand] = useState(false);

  return (
    <section>
      <div className="sidebar-options" onClick={() => setExpand(!toExpand)}>
        <div className="sign">{!toExpand ? '+' :
          <div className="minus-sign"></div>
        }</div>
        <div>{option}</div>
      </div>
      <SubOptions options={subOptions} toExpand={toExpand}/>
      <div className="divider"></div>
    </section>
  )
}
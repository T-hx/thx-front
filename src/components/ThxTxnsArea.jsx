import React from 'react';
import AllThxTxns from './AllThxTxns'
import SentThxTxns from './SentThxTxns'
import ReceivedThxTxns from './ReceivedThxTxns'
import NewThxTxnForm from "./NewThxTxnForm";

function ThxTxnsArea(props) {
  const extra = props.value;
  let thx_txns_list;
  if (extra === 'all') {
    thx_txns_list = <AllThxTxns />;
  } else if (extra === 'sent') {
    thx_txns_list = <SentThxTxns />;
  } else if (extra === 'received') {
    thx_txns_list = <ReceivedThxTxns />;
  }
  return (
    <div>
      <NewThxTxnForm />
      {thx_txns_list}
    </div>
  )
}

export default ThxTxnsArea;


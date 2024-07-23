import { useContext, useState } from 'react';

import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';

import { FireStoreDataContext } from '../../context/FireStoreDataContext';
import { AuthContext } from '../../context/AuthContext';

export const AuctionBody = () => {
  const { items } = useContext(FireStoreDataContext);
  const { stateLogout } = useContext(AuthContext);


((localStorage.getItem('informeLS')===null)) ? console.log('true-Nube') : console.log('false-LS')
  
  return (
    <div className="">
      {localStorage.getItem('userEmailLS') !== null && <AddAuction items={items} />}
      {items.length > 0 && localStorage.getItem('userEmailLS') !== null  && localStorage.setItem("Done", "graciasBody-19")}
    
      {stateLogout ? (
        <div className="row row-cols-1 p-5 border mt-1 ">
          {items.map((doc, i) => {
            return <AuctionCard item={(localStorage.getItem('informeLS') === null) ? doc : JSON.parse(localStorage.getItem('informeLS'))} key={i} />;
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

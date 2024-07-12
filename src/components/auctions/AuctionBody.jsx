import { useContext } from 'react';

import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';

import { FireStoreDataContext } from '../../context/FireStoreDataContext';
import { AuthContext } from '../../context/AuthContext';

export const AuctionBody = () => {
  const { items } = useContext(FireStoreDataContext);
  const { stateLogout } = useContext(AuthContext);

  //console.log(items);

  
  return (
    <div className="">
      {localStorage.getItem('userEmailLS') !== null && <AddAuction items={items} />}
      {items.length > 0 && localStorage.setItem("Done", "graciasBody-19")}

      {stateLogout ? (
        <div className="row row-cols-1 p-5 border mt-1 ">
          {items.map((doc, i) => {
            return <AuctionCard item={doc} key={i} />;
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

import React, { FC } from 'react';
import { Catalog } from '../components/Catalog';

export const PhonesPage: FC = () => (
  <main>
    <Catalog />
  </main>
);
// import { Card } from '../components/Card/Card';
// import { Phone } from '../types/Phone';
// import { useFetchData } from '../hooks/useFetchData';

// export const PhonesPage: FC = () => {
//   const { isLoading, data: phones } = useFetchData<Phone>();

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         phones.map((phone: Phone) => <Card key={phone.id} product={phone} />)
//       )}
//     </div>
//   );
// };

import React, { FC } from 'react';
import { Catalog } from '../components/Catalog';

export const PhonesPage: FC = () => (
  <main>
    <Catalog />
  </main>
);
// import { Catalog } from '../components/Catalog';
// import { Phone } from '../types/Phone';
// import { useFetchData } from '../hooks/useFetchData';

// export const PhonesPage: FC = () => {
//   const { isLoading, data: phones } = useFetchData<Phone>();

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <Catalog phones={phones} /> // Pass the phones data as a prop to the Catalog component
//       )}
//     </div>
//   );
// };

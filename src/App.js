import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React with Local Storage!</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

export default App;

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(localStorageKey) || ''
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);

//   return [value, setValue];
// };

// const App = () => {
//   const [value, setValue] = useStateWithLocalStorage(
//     'myValueInLocalStorage'
//   );

//   const onChange = event => setValue(event.target.value);

//   return (
//     <div>
//       <h1>Hello React Function Component!</h1>

//       <input value={value} type="text" onChange={onChange} />

//       <p>{value}</p>
//     </div>
//   );
// };

// export default App;

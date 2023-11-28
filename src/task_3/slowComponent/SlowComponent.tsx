import {memo, useEffect, useMemo} from "react";

// React.memo

// export const SlowComponent = memo(() => {
//   console.log('SlowComponent re-render...');
//
//   let now = performance.now();
//
//   while (performance.now() - now < 1000) {
//     // Artificial delay -- do nothing for 100ms
//   }
//
//   return <p>I am a very slow component tree.</p>;
// });


// useMemo - but SlowComponent is rerendering

// export const SlowComponent = () => {
//   console.log('SlowComponent re-render...');
//
//   let now = performance.now();
//
//   useMemo(() => {
//     while (performance.now() - now < 1000) {
//       // Artificial delay -- do nothing for 100ms
//     }
//   }, []);
//
//   return <p>I am a very slow component tree.</p>;
// };

export const SlowComponent = () => {
    console.log('SlowComponent re-render...');

    let now = performance.now();

    while (performance.now() - now < 1000) {
        // Artificial delay -- do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
};

// export const SlowComponent = () => {
//     console.log('SlowComponent re-render...');
//
//     let now = performance.now();
//     useEffect(() => {
//         while (performance.now() - now < 1000) {
//             // Artificial delay -- do nothing for 100ms
//         }
//     }, []);
//
//     return <p>I am a very slow component tree.</p>;
// };
import React, { useCallback, useEffect, useMemo, useState, memo } from 'react'


const Child = memo(({n, onClickAction}) => {
  console.log("Child rendered");
  return (
    <div>
      <div>Child {n}</div>
      <button className='bg-black text-white rounded-xl px-4 py-2' onClick={onClickAction}>click</button>
       </div>
  )
})

export default function Example({a, b}) {
  const [count, setCount] = useState(0);
    const [x, setX] = useState(5)
console.log("App rendered");

  const result = useMemo(()=>{
        for (let i = 0; i < 7_000; i++){
            console.log("loop is run")
        }
      console.log("App rendered in memo");
      return x**2;

  },[x])

  // const pow = () => {
  //   console.log("pow ran")
  //   console.log("-----------")
  //   return Math.floor(count/5)
  // };

  // const t = useMemo(()=>{
  //   console.log("re-execute")
  //   return 5;
  // },[t])

  const action = useCallback(() => console.log("The button inside child compo is clicked"),[]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white shadow-md rounded-2xl p-6 w-72 text-center">
        <h1 className="text-xl font-semibold mb-4">Counter Example {`(##)`} <Child n={result} onClickAction={action} /> </h1>
        <p className="text-lg mb-4">Count: <span className="font-bold">{count}</span></p>
        <button
          onClick={() => {
            setCount(count + 1)
            if (count == x){
                setX(9)
            }
          }}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

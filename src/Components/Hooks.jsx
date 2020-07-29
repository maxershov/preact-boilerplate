import React, { useState, useEffect } from 'preact/compat';


const Hooks = () => {
  const [hookCount, setHookCount] = useState(0);

  useEffect(() => {
    console.log('UseEffect with []')
  }, [])

  return (
    <>
      <h2>Hooks</h2>
      <p>{hookCount}</p>
      <button
        type="button"
        onClick={() => {
          setHookCount(hookCount + 1)
        }}
      >HooksCount
      </button>
    </>
  );
}


export default Hooks;
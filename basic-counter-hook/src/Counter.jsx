import React, { useState } from 'react'

// 1. Bileşen (Component) Tanımlanıyor
function Counter() {
  // useState: Değişken veriyi (sayıyı) tutan kanca
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Ekranda gözüken sayı */}
      <h1>{count}</h1>

      {/* Tıklanınca sayıyı 1 artıran buton */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Counter

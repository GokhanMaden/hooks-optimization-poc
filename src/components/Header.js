import React, { memo } from 'react';

const Header = ({logo}) => {

  console.log('Header Component Called');

  return(
    <div style={{ textAlign: 'center' }}>
      <img src={logo} alt="logo"></img>
    </div>
  )
}

export default memo(Header);

// Eğer bir component React.memo ile çağrılırsa,
// React bu component’i render eder ve bu component’e gönderilen props değerlerini saklar/kaydeder (memoized).
// Bir sonraki render durumunda bu component’e gönderilen props değerleri,
// bir önceki render edildiğindeki props değerleri ile aynıysa component tekrar render edilmez.

// Bunun sebebi, eğer component’e gönderilen props değerleri component render edildiği zaman
// bir önceki props değerleri ile aynıys
// component’in render edilmesi pas geçilir.
// Böylelikle Header component’ine gönderilen props değerleri değişene kadar tekrar render edilmez.
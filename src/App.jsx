import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('featured.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((dt) => (
        <div>
          <img src={dt.companyLogo}></img>
          <p>title: {dt.jobTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

import { useState, useEffect } from 'react';

import axios from 'axios';

const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;

      setFetchedData(JSON.stringify(data, null, 2));
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-center">first request</h2>
      <div className="content">
        <span>{fetchedData.slice(0, 1500)}...</span>
      </div>
    </>
  );
};
export default FirstRequest;

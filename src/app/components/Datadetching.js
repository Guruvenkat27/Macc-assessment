// pages/index.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export async function gettingdata() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Datafetching = ({ data }) => {
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state.data);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_DATA', payload: data });
    }
  }, [data, dispatch]);

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(storedData, null, 2)}</pre>
    </div>
  );
};

export default Datafetching;

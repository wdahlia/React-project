import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repo"],
    queryFn: () => fetch('https://api.github.com/repos/tannerlinsley/react-query')
      .then(res => res.json()),
    retry: 1,
  });

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<pre>Error Message</pre>)
  }

  return (
    <div>
      {data.name}
    </div>
  );
}


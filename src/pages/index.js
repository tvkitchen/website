import React from 'react';

import Layout from '@ui/components/Layout';

export default function HomeRoute(props) {
  console.log({ props });
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Box, Flex } from 'theme-ui';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Flex
        sx={{
          flexDirection: 'row',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            variant: 'boxes.sidebar',
            width: '250px',
          }}
        >
          Sidebar content
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            mx: 'auto',
            px: 3,
          }}
        >
          Main content
        </Box>
      </Flex>
    </>
  );
}

import { Box, Link as Anchor, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import Logo from '@/shared/icons/santana-logo';

export const Header = () => {
  return (
    <Box
      display="flex"
      width="100%"
      paddingTop="45px"
      alignItems="center"
    >
      <Logo />

      <Stack
        direction="row"
        marginLeft={{ md: '86px', lg: '220px' }}
        spacing={{ md: '60px', lg: '120px' }}
      >
        <Anchor as={Link} href="/" fontSize="20px" fontWeight={300}>Главная</Anchor>
        <Anchor as={Link} href="/" fontSize="20px" fontWeight={300}>Услуги</Anchor>
        <Anchor as={Link} href="/" fontSize="20px" fontWeight={300}>О нас</Anchor>
      </Stack>
    </Box>
  );
};

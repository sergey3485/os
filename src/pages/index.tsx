import Head from 'next/head';
import Image from 'next/image';
import {
  Box, Heading, Text, Button,
} from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Header } from '@/widgets/header';
import { Card } from '@/shared/components/card';
import { CardContainer } from '@/widgets/card-container';
import { Form } from '@/features/form';
import { List } from '@/widgets/list';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        paddingX="32px"
      >
        <Header />
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={{ md: '764px', lg: '1200px' }}
        >
          <Box
            display="flex"
            marginTop="60px"
            maxWidth="660px"
            flexDirection="column"
          >
            <Heading variant={{ md: 'small', lg: 'medium' }} color="brand.blue">
              Оформляем любые полисы ОСАГО, даже те, которые оформить в наше время сложно
            </Heading>

            <Text color="brand.blue" fontSize={{ md: '26px', lg: '36px' }} fontWeight={300} lineHeight={{ md: '30px', lg: '42px' }} marginTop="18px">
              Цель работы нашей команды - экономить деньги и время наших клиентов, которым необходимо оформить страховой полис.
            </Text>
          </Box>

          <Box
            display="flex"
          >
            <Button>Написать в What’s App</Button>
            <Button as={Link} href="#form">Отправить заявку</Button>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            marginTop="32px"
          >
            <CardContainer />

            <Box
              marginTop={{ md: '36px', lg: '48px' }}
            >
              <List />
            </Box>
          </Box>
        </Box>

      </Box>
      <Box backgroundColor="brand.blue" paddingLeft="114px" id="form" marginTop="18px">
        <Form />
      </Box>
    </>
  );
};

export default Home;

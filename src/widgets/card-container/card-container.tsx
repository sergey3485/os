import { Box, SimpleGrid } from '@chakra-ui/react';
import { Card } from '@/shared/components/card';

export const CardContainer = () => {
  return (
    <SimpleGrid columns={3} spacing={{ md: '100px', lg: '150px' }}>
      <Card
        value="5+ лет"
        description="Общий стаж работы"
      />
      <Card
        value="0 ₽"
        description="Комиссий и дополнительных платежей"
      />
      <Card
        value="3/6/12"
        description="Страхование на любой срок"
      />
    </SimpleGrid>
  );
};

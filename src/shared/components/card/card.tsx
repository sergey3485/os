import { Box, Heading, Text } from '@chakra-ui/react';

export interface CardProps {
  value: string;
  description: string;
}

export const Card = (props: CardProps) => {
  const {
    value,
    description,
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="16px 10px"
      backgroundColor="brand.blue"
      color="white"
      borderRadius="10px"
      maxWidth={{ md: '188px', lg: '300px' }}
    >
      <Heading fontSize={{ md: '40px', lg: '72px' }} fontWeight={800} marginBottom="4px" lineHeight={{ md: '48px', lg: '88px' }}>
        {value}
      </Heading>

      <Box marginTop="auto">
        <Text fontSize={{ md: '22px', lg: '36px' }} fontWeight={800} marginBottom="4px" lineHeight={{ md: '26px', lg: '44px' }}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

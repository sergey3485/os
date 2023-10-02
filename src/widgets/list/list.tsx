import { UnorderedList, ListItem } from '@chakra-ui/react';

export const List = () => {
  return (
    <UnorderedList color="brand.blue" fontSize="32px" lineHeight="36px" fontWeight={300} spacing={{ md: '24px', lg: '12px' }}>
      <ListItem>
        Страхование новичков, водителей с аварийным или маленьким водительским стажем.
      </ListItem>

      <ListItem>
        Страхование мотоциклов, такси, автобусов и грузовиков.
      </ListItem>

      <ListItem>
        Сравниваем цены по всем ведущим страховым компаниям, выбирая наиболее комфортный вариант для клиента.
      </ListItem>
    </UnorderedList>
  );
};

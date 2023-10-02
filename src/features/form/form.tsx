import * as React from 'react';
import {
  Box,
  Heading,
  Input,
  Stack,
  Textarea,
  Text,
  Link,
  useDisclosure,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Checkbox,
} from '@chakra-ui/react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import CloseIcon from '@/shared/icons/close-modal';

interface IFormValues {
  name: string;
  phone: number | null;
  email: string;
  service: string;
  confirm: false;
}

export const Form = (): JSX.Element => {
  const [status, setStatus] = React.useState<number>();
  const { onClose, onOpen, isOpen } = useDisclosure();
  const {
    register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset,
  } = useForm<IFormValues>({
    defaultValues: {
      name: '',
      phone: null,
      email: '',
      service: '',
      confirm: false,
    },
  });

  React.useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {

    // setStatus(response.status);
    // onOpen();
  };

  const error: SubmitErrorHandler<IFormValues> = () => {
    reset({}, { keepErrors: true, keepIsValid: true });
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        borderColor="white"
        maxWidth="532px"
        as="form"
        onSubmit={handleSubmit(onSubmit, error)}
      >
        <Box display="flex" paddingTop={{ sm: '30px', md: '48px' }} paddingBottom={{ sm: '22px', md: '28px' }} flexDirection="column">
          <Stack width="100%" direction="column" spacing={{ sm: '16px', md: '24px' }}>
            <Box display="flex" width="100%" flexDirection="column">
              {errors.name && (
                <Text
                  color="rgba(245, 36, 17, 1)"
                  fontSize="12px"
                  lineHeight="14px"
                  marginLeft="18px"
                >
                  Некорректно введено имя
                </Text>
              )}
              <Input
                variant="unstyled"
                width="100%"
                fontSize={{ md: '19px' }}
                paddingX={{ sm: '14px', md: '18px' }}
                paddingY={{ sm: '8px', md: '12px' }}
                lineHeight={{ sm: '14px', md: '22px' }}
                color="brand.blue"
                backgroundColor="white"
                borderRadius="26px"
                placeholder="Имя"
                _placeholder={{ color: 'rgba(199, 199, 199, 1)' }}
                {...register('name', {
                  required: true, maxLength: 50, minLength: 3, pattern: /^[а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/,
                })}
                type="text"
              />
            </Box>
            <Box display="flex" width="100%" flexDirection="column">
              {errors.email && (
                <Text
                  color="rgba(245, 36, 17, 1)"
                  fontSize="12px"
                  lineHeight="14px"
                  marginLeft="18px"
                >
                  Некорректно введен Email
                </Text>
              )}
              <Input
                variant="unstyled"
                width="100%"
                fontSize={{ md: '19px' }}
                paddingX={{ sm: '14px', md: '18px' }}
                paddingY={{ sm: '8px', md: '12px' }}
                lineHeight={{ sm: '14px', md: '22px' }}
                color="brand.blue"
                backgroundColor="white"
                borderRadius="26px"
                placeholder="Почтовый Адрес"
                _placeholder={{ color: 'rgba(199, 199, 199, 1)' }}
                {...register('email', { required: true, pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/ })}
              />
            </Box>

            <Box display="flex" width="100%" flexDirection="column">
              {errors.service && (
              <Text
                color="rgba(245, 36, 17, 1)"
                fontSize="12px"
                lineHeight="14px"
                marginLeft="18px"
              >
                Некорректно указана услуга
              </Text>
              )}
              <Input
                variant="unstyled"
                width="100%"
                fontSize={{ md: '19px' }}
                paddingX={{ sm: '14px', md: '18px' }}
                paddingY={{ sm: '8px', md: '12px' }}
                lineHeight={{ sm: '14px', md: '22px' }}
                color="brand.blue"
                backgroundColor="white"
                borderRadius="26px"
                placeholder="Услуга"
                _placeholder={{ color: 'rgba(199, 199, 199, 1)' }}
                {...register('service', { required: true })}
              />
            </Box>

            <Box display="flex" width="100%" flexDirection="column">
              {errors.phone && (
                <Text
                  color="rgba(245, 36, 17, 1)"
                  fontSize="12px"
                  lineHeight="14px"
                  marginLeft="18px"
                >
                  Некорректно введен номер телефона
                </Text>
              )}
              <Input
                variant="unstyled"
                width="100%"
                fontSize={{ md: '19px' }}
                paddingX={{ sm: '14px', md: '18px' }}
                paddingY={{ sm: '8px', md: '12px' }}
                lineHeight={{ sm: '14px', md: '22px' }}
                color="brand.blue"
                backgroundColor="white"
                borderRadius="26px"
                placeholder="Номер телефон"
                _placeholder={{ color: 'rgba(199, 199, 199, 1)' }}
                {...register('phone', {
                  required: true, minLength: 7, maxLength: { value: 14, message: 'lol' }, pattern: /^((\+7|7|8)+([0-9]){10})$/,
                })}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              marginLeft="18px"
            >
              <Checkbox
                fontSize="32px"
                borderColor="white"
                backgroundColor="white"
                size="lg"
                {...register('confirm', { required: true })}
                color={errors.confirm ? 'rgba(217, 46, 46, 1)' : 'black'}
                isInvalid={!!errors.confirm}
              />
              <Text fontSize="16px" color="white" marginLeft="16px">Согласие на обработку персональных данных</Text>
            </Box>

            <Input
              variant="unstyled"
              backgroundColor="brand.red"
              color="white"
              type="submit"
              maxWidth="164px"
              fontSize={{ sm: '12px', md: '16px' }}
              lineHeight={{ sm: '16px', md: '18px' }}
              paddingY="12px"
              cursor="pointer"
              value="Узнать больше"
              marginLeft="10px"
            />
          </Stack>
        </Box>
      </Box>

      <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent padding="24px" boxShadow="none" maxWidth="max-content" position="relative" backgroundColor="white">
          <Box position="absolute" top="4px" right="4px" cursor="pointer">
            <CloseIcon onClick={onClose} color="white" />
          </Box>
          <Box padding="24px" borderRadius="10px">
            <Text fontSize="20px" lineHeight="24px" color="black">{status === 200 ? 'Спасибо, мы свяжемся с Вами в ближайшее время!' : 'Извините, но что-то пошло не так'}</Text>
          </Box>
        </ModalContent>
      </ChakraModal>

    </>
  );
};

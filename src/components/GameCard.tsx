import { Flex, Image, Text } from '@chakra-ui/react';

interface IGameCardProps {
  imageUrl: string;
  name: string;
}
export const GameCard = (props: IGameCardProps) => {
  return (
    <Flex alignItems={'center'} justifyContent="center" direction={'column'}>
      <Image
        src={props.imageUrl}
        alt={props.name}
        borderRadius="full"
        boxSize="100px"
      />
      <Text>{props.name}</Text>
    </Flex>
  );
};

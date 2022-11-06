import { Button, Flex, Heading } from '@chakra-ui/react';

interface IHeaderProps {
  resetList: () => void;
}
export const Header = (props: IHeaderProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems={'center'}
      mb={15}
      direction="column"
    >
      <Heading as="h2" mb={5}>
        Jackbox Games Tier List
      </Heading>
      <Button onClick={() => props.resetList()}>Reset List</Button>
    </Flex>
  );
};

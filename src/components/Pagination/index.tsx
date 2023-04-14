import { Button, Flex, HStack, Text } from "@chakra-ui/react";

type PropsPagination = {
  count: number;
  total?: number;
  handleChangePage: (type: "next" | "previous") => void;
};
export default function PaginationCard({
  count,
  total,
  handleChangePage,
}: PropsPagination) {
  const totalPag = total ? total : 0;

  return (
    <Flex justify="center" align="center" marginBottom="20px">
      <HStack
        spacing="15px"
        border="1px solid #FF0000"
        borderRadius="10px"
        padding="10px"
      >
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleChangePage("previous")}
        >
          {" "}
          Previous
        </Button>
        <Text as="b" color="#2a75bb">
          Page {count + 1} of {totalPag / 10}
        </Text>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleChangePage("next")}
        >
          {" "}
          Next
        </Button>
      </HStack>
    </Flex>
  );
}

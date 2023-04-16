import {
  Box,
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FunctionComponent, ReactElement, ReactNode } from "react";
type Components = {
  element: ReactNode;
  tabTitle: string;
};
interface Props {
  componentProps: Components[];
}

export default function TabsContent({ componentProps }: Props) {
  return (
    <>
      <Tabs
        data-testid="tabs-testid"
        variant="soft-rounded"
        justifyContent="center"
        align="center"
        marginTop="30px"
      >
        <TabList>
          {componentProps.map((component, index) => (
            <Tab key={`${index}-${component.tabTitle}`} fontFamily="fantasy">
              {component.tabTitle}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {componentProps.map((component, index) => (
            <TabPanel key={`${index}-${component.tabTitle}`} padding={2}>
              {component.element}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
}

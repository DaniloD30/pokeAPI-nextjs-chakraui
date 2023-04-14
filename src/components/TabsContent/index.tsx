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
  children: Components[];
}

export default function TabsContent({ children }: Props) {
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
          {children.map((component, index) => (
            <Tab key={`${index}-${component.tabTitle}`} fontFamily="fantasy">
              {component.tabTitle}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {children.map((component, index) => (
            <TabPanel key={`${index}-${component.tabTitle}`} padding={2}>
              {component.element}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
}

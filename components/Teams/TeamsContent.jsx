import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Divider,
} from "@chakra-ui/react";
import TeamsSection from "./TeamsSection";

const TeamsContent = ({ teamsData }) => (
  <Box>
    <Tabs defaultIndex={1} isFitted>
      <TabList>
        <Tab _focus={{ outline: "none" }}>Advisory</Tab>
        <Tab _focus={{ outline: "none" }}>IEEE SB MUJ</Tab>
        <Tab _focus={{ outline: "none" }}>IEEE CS Society</Tab>
        <Tab _focus={{ outline: "none" }}>IEEE WIE</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TeamsSection heading="Faculty" data={teamsData.faculty} />
          <TeamsSection heading="Advisors" data={teamsData.advisors} />
        </TabPanel>
        <TabPanel>
          <TeamsSection
            heading="Executive Committee"
            data={teamsData.ecSb}
            ec="true"
          />
          <Divider />
          <TeamsSection heading="Core Committee" data={teamsData.ccSb} />
          <Divider />
          <TeamsSection heading="Operating Committee" data={teamsData.ocSb} />
        </TabPanel>
        <TabPanel>
          <TeamsSection
            heading="Executive Committee"
            data={teamsData.ecCs}
            ec="true"
          />
          <Divider />
          <TeamsSection
            heading="MUJ Central Developers Team"
            data={teamsData.ttCS}
          />
          <Divider />
          <TeamsSection heading="Core Committee" data={teamsData.ccCs} />
        </TabPanel>
        <TabPanel>
          <TeamsSection
            heading="Executive Committee"
            data={teamsData.ecWie}
            ec="true"
          />
          <Divider />
          <TeamsSection heading="Core Committee" data={teamsData.ccWie} />
          <Divider />
          <TeamsSection heading="Operating Committee" data={teamsData.ocWie} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default TeamsContent;

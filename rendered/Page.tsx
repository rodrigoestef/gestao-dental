import React from "react";
import { Grid, Box } from "@material-ui/core";
import Card from "@components/ui/Card";
import SearchAndRegister from "@components/SearchAndRegister";

const Page: React.FC = () => {
  return (
    <Grid id="container" wrap="nowrap" container direction="column" spacing={4}>
      <Grid item>
        <SearchAndRegister />
      </Grid>
      <Box height="100%" padding="16px" bgcolor="var(--bg-color)">
        <Card>grid</Card>
      </Box>
    </Grid>
  );
};

export default Page;

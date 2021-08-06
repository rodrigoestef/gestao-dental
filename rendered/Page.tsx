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
      <Grid item>
        <Box overflow="auto" height="400px" bgcolor="red">
          page
        </Box>
      </Grid>
    </Grid>
  );
};

export default Page;

import { Grid } from "@material-ui/core";
import { GridItem, CustonSkeleton } from "./styles";
import React from "react";

const skeleton: React.FC = () => (
  <>
    {Array.from({ length: 3 }, () => (
      <GridItem>
        <Grid container justifyContent="space-between">
          <Grid item xs={12}>
            <CustonSkeleton />
          </Grid>
          <Grid item container xs={6} spacing={4}>
            <Grid item xs={6}>
              <CustonSkeleton />
            </Grid>
            <Grid item xs={6}>
              <CustonSkeleton />
            </Grid>
          </Grid>
          <Grid item container xs={6} spacing={4} justifyContent="flex-end">
            <Grid item xs={4}>
              <CustonSkeleton />
            </Grid>
          </Grid>
          <Grid item container xs={6} spacing={4}>
            <Grid item xs={6}>
              <CustonSkeleton />
            </Grid>
            <Grid item xs={6}>
              <CustonSkeleton />
            </Grid>
          </Grid>
        </Grid>
      </GridItem>
    ))}
  </>
);

export default skeleton;

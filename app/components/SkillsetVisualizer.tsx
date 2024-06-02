import { Chip, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import React from "react";

export interface SkillsetItem {
  icon: string;
  label: string;
}

interface SkillsetVisualizerProps {
  header: string;
  items: SkillsetItem[];
}

const SkillsetVisualizer: React.FC<SkillsetVisualizerProps> = ({
  header,
  items,
}) => {
  return (
    <Stack>
      <Grid container columnGap={3} rowGap={2} padding={2}>
        <Grid xs={12}>
          <Typography variant="h6" fontStyle={"italic"}>
            {header}
          </Typography>
        </Grid>

        {items.map((item) => (
          <Grid key={item.label}>
            <Chip
              icon={
                <Image
                  src={item.icon}
                  alt={item.label + " icon"}
                  width={24}
                  height={24}
                  style={{ borderRadius: "0.4rem" }}
                />
              }
              label={item.label}
              sx={{ padding: "0.5rem" }}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default SkillsetVisualizer;

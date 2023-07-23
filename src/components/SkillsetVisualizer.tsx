import { Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export interface SkillsetItem {
  icon: string;
  label: string;
}

interface SkillsetVisualizerProps {
  isDarkModeEnabled?: boolean;
  isMobileScreen?: boolean;
  header: string;
  items: SkillsetItem[];
}

const SkillsetVisualizer: React.FC<SkillsetVisualizerProps> = ({
  isDarkModeEnabled = true,
  isMobileScreen = false,
  header,
  items,
}) => {
  return (
    <Grid container columnGap={3} rowGap={2} padding={2}>
      <Grid display={"flex"} md={12} xs={12}>
        <Typography variant="h6" fontStyle={"italic"}>
          {header}
        </Typography>
      </Grid>

      {items.map((item) => (
        <Grid key={item.label}>
          <Chip
            icon={
              <img
                src={item.icon}
                alt={item.label + " icon"}
                width={"24rem"}
                style={{ borderRadius: "0.4rem" }}
              />
            }
            label={item.label}
            sx={{ padding: "0.5rem" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillsetVisualizer;

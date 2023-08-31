import { Card, Stack, Typography } from "@mui/material";

export function MyAccount() {
  return (
    <Stack>
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <Card key={i} sx={{ padding: "1rem ", bgcolor: "#888" }}>
            <Typography variant="body1" color="initial">
              Table
            </Typography>
          </Card>
        ))}
    </Stack>
  );
}

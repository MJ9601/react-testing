import { Stack, Button, Typography } from "@mui/material";

export function Header() {
  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      padding="6px 18px"
      bgcolor="green"
    >
      <Stack>
        <Typography>user Info</Typography>
      </Stack>
      <Stack>
        <Button variant="contained">Make a payment</Button>
      </Stack>
    </Stack>
  );
}

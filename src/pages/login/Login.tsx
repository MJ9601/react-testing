import {
  FormControl,
  FormLabel,
  Stack,
  Card,
  Input,
  Typography,
  Button,
} from "@mui/material";

export function Login() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        alignContent: "center",
      }}
    >
      <Card
        sx={{
          width: "300px",
          height: "50vh",
          background: "#eee",
        }}
      >
        <Stack
          direction="column"
          component="form"
          alignItems="center"
          width="100%"
          height="100%"
          justifyContent="space-around"
        >
          <Typography fontWeight="600" fontSize="large">
            Log In
          </Typography>
          <Stack direction="column" alignItems="start" mt="-50px">
            <FormLabel>Username</FormLabel>
            <Input name="username" type="text" sx={{ position: "relative" }} />
            <FormLabel sx={{ mt: "30px" }}>Password</FormLabel>
            <Input name="password" type="password" />
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              sx={{ mt: "30px" }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}

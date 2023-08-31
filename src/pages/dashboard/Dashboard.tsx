import { Container, Stack } from "@mui/material";
import { Header, InfoWapper, Sidebar } from "../../layout";
import { AppProvider } from "../../context";

export function Dashboard() {
  return (
    <AppProvider>
      <Stack direction="row" component={Container}>
        <Stack flex=".2">
          <Sidebar />
        </Stack>
        <Stack flex=".8">
          <Header />
          <InfoWapper />
        </Stack>
      </Stack>
    </AppProvider>
  );
}

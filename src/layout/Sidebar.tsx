import { Button, Stack } from "@mui/material";
import { useAppContext } from "../context";

export function Sidebar() {
  const { setStage } = useAppContext();
  const itmList = ["Home", "My Account", "Bank Accounts", "Notification"];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      height="100vh"
      borderRight="1px #999 solid"
    >
      <Stack direction="column" gap=".7rem" alignItems="start">
        {itmList.map((itm, i) => (
          <Button
            key={itm}
            onClick={() => setStage(i)}
            sx={{
              color: "#eee",
              textAlign: "start",
              ":focus": { outline: "none" },
            }}
          >
            {itm}
          </Button>
        ))}
        <Button
          sx={{
            color: "#eee",
            textAlign: "start",
            ":focus": { outline: "none" },
          }}
        >
          Log out
        </Button>
      </Stack>
    </Stack>
  );
}

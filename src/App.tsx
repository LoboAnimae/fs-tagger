import { Menu } from "@mui/icons-material";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu sx={{ color: "#33363F" }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#33363F" }}>
            FS TAGGER
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={}></Drawer>
    </Box>
  );
}

export default App;

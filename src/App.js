import Topbar from "./global/Topbar";
import { ColorModeContext } from "./theme";
import { useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
import Sidebar from "./global/Sidebar";
import { useState } from "react";
import Team from "./scenes/Team/Team";
import Contacts from "./scenes/Contacts/Contacts";
import Invoices from "./scenes/Invoices/Invoices";
import Form from "./scenes/Form/Form";
import Calendar from "./scenes/Calendar/Calendar";
import Faq from "./scenes/Faq/Faq";
import { Bar } from "./scenes/Bar/Bar";
import { Pie } from "./scenes/Pie/Pie";
import { Line } from "./scenes/Line/Line";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/Line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

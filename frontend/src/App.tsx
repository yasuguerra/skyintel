import Overview from "@/pages/Overview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

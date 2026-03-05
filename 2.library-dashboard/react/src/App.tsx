//Notes:
//The App.tsx is like your template page , whatever is placed in here will apply to all pages

import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Library Borrowing Dashboard</h1>
      <AppRoutes />
    </main>
  );
}

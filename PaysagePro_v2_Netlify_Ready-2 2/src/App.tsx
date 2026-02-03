
import AppLayout from "@/components/layout/AppLayout";
import DashboardPage from "@/pages/Dashboard";
import DevisPage from "@/pages/Devis";
import InventoryPage from "@/pages/Inventory";
import SuppliersPage from "@/pages/Suppliers";
import OrdersPage from "@/pages/Orders";
import WorkOrdersPage from "@/pages/WorkOrders";
import GISPage from "@/pages/GIS";
import PaymentTerminalPage from "@/pages/PaymentTerminal";
import DispatchPage from "@/pages/Dispatch";
import LeadsPage from "@/pages/Leads";
import FinancePage from "@/pages/Finance";
import PortfolioPage from "@/pages/Portfolio";
import { Switch, Route, Redirect } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Placeholders for other pages
const CalendarPage = () => <div className="p-10 text-center"><h2 className="text-2xl font-bold mb-4">Calendrier & Rendez-vous</h2><p className="text-muted-foreground">Module en cours de développement. Sera disponible dans la Phase Bêta.</p></div>;
const CommunicationsPage = () => <div className="p-10 text-center"><h2 className="text-2xl font-bold mb-4">Centre de Communications</h2><p className="text-muted-foreground">Module en cours de développement.</p></div>;
const EmployeesPage = () => <div className="p-10 text-center"><h2 className="text-2xl font-bold mb-4">Gestion des Employés</h2><p className="text-muted-foreground">Module en cours de développement.</p></div>;
const PayrollPage = () => <div className="p-10 text-center"><h2 className="text-2xl font-bold mb-4">Paie et Rapports</h2><p className="text-muted-foreground">Module en cours de développement.</p></div>;

function AppRouter() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={DashboardPage} />
        <Route path="/devis" component={DevisPage} />
        <Route path="/inventaire" component={InventoryPage} />
        <Route path="/fournisseurs" component={SuppliersPage} />
        <Route path="/commandes" component={OrdersPage} />
        <Route path="/ot" component={WorkOrdersPage} />
        <Route path="/gis" component={GISPage} />
        <Route path="/pos" component={PaymentTerminalPage} />
        <Route path="/dispatch" component={DispatchPage} />
        <Route path="/leads" component={LeadsPage} />
        <Route path="/finance" component={FinancePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/communications" component={CommunicationsPage} />
        <Route path="/employes" component={EmployeesPage} />
        <Route path="/paie" component={PayrollPage} />
        {/* Catch-all redirect to home */}
        <Route path="/:rest*">
            {() => <Redirect to="/" />}
        </Route>
      </Switch>
    </AppLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

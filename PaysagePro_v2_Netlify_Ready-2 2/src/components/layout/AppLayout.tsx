
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  FileText, 
  Calendar,
  LayoutGrid, 
  Users, 
  DollarSign, 
  Package, 
  Truck,
  ClipboardCheck,
  HardHat,
  MapPin,
  Wallet,
  Megaphone,
  BarChart3,
  Images,
  Menu,
  Phone,
  Settings,
  LogOut,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Tableau de bord", icon: LayoutDashboard, href: "/" },
  { label: "Devis & Factures", icon: FileText, href: "/devis" },
  { label: "Dispatch (Planning)", icon: LayoutGrid, href: "/dispatch" },
  { label: "CRM / Leads", icon: Megaphone, href: "/leads" },
  { label: "Finance & Rapports", icon: BarChart3, href: "/finance" },
  { label: "Portfolio", icon: Images, href: "/portfolio" },
  { label: "Communications", icon: Phone, href: "/communications" },
  { label: "Employés & Horaires", icon: Users, href: "/employes" },
  { label: "Paie", icon: DollarSign, href: "/paie" },
  { label: "Stocks", icon: Package, href: "/inventaire" },
  { label: "Fournisseurs", icon: Truck, href: "/fournisseurs" },
  { label: "Commandes", icon: ClipboardCheck, href: "/commandes" },
  { label: "Ordres de Travail", icon: HardHat, href: "/ot" },
  { label: "Carte / GIS", icon: MapPin, href: "/gis" },
  { label: "Terminal Paiement", icon: Wallet, href: "/pos" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavContent = () => (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground">
      <div className="p-6 flex items-center gap-3 border-b border-sidebar-border">
        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
          <Leaf className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-heading font-bold text-lg leading-tight">Paysage<span className="text-primary font-extrabold">Pro</span></h1>
          <p className="text-xs text-sidebar-foreground/60">Gestion Intégrée</p>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-sidebar-primary-foreground" : "text-sidebar-foreground/60")} />
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 mb-4 px-2">
          <Avatar className="w-9 h-9 border border-sidebar-border">
            {/* <AvatarImage src="/avatar-placeholder.png" /> */}
            <AvatarFallback className="bg-sidebar-accent text-sidebar-foreground">AD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Admin Système</p>
            <p className="text-xs text-sidebar-foreground/60 truncate">admin@paysage.pro</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent">
                <Settings className="w-4 h-4 mr-2" />
                Config
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                <LogOut className="w-4 h-4 mr-2" />
                Sortir
            </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 lg:w-72 fixed inset-y-0 z-50 shadow-xl">
        <NavContent />
      </aside>

      {/* Mobile Header & Sheet */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-sidebar border-b border-sidebar-border flex items-center px-4 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 border-r-sidebar-border bg-sidebar">
            <NavContent />
          </SheetContent>
        </Sheet>
        <span className="ml-4 font-heading font-bold text-lg text-sidebar-foreground">PaysagePro</span>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 lg:ml-72 pt-16 md:pt-0 min-h-screen transition-all">
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}

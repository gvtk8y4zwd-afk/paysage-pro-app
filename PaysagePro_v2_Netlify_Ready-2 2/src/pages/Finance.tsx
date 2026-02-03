
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight, DollarSign, Wallet, CreditCard, Download, Filter, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock Data
const monthlyData = [
  { name: 'Jan', ventes: 12000, depenses: 8500 },
  { name: 'Fév', ventes: 15000, depenses: 9000 },
  { name: 'Mar', ventes: 28000, depenses: 12000 },
  { name: 'Avr', ventes: 45000, depenses: 25000 },
  { name: 'Mai', ventes: 68000, depenses: 32000 },
  { name: 'Juin', ventes: 85000, depenses: 45000 },
  { name: 'Juil', ventes: 92000, depenses: 48000 },
  { name: 'Août', ventes: 88000, depenses: 46000 },
  { name: 'Sep', ventes: 75000, depenses: 38000 },
  { name: 'Oct', ventes: 62000, depenses: 30000 },
  { name: 'Nov', ventes: 45000, depenses: 22000 },
  { name: 'Déc', ventes: 25000, depenses: 15000 },
];

const receivables = [
  { id: "INV-2024-089", client: "Mme. Tremblay", amount: 4500, due: "2024-06-15", status: "late", days: 12 },
  { id: "INV-2024-092", client: "Ville de Québec", amount: 12800, due: "2024-06-20", status: "late", days: 7 },
  { id: "INV-2024-095", client: "M. Gagnon", amount: 2350, due: "2024-06-28", status: "pending", days: 0 },
  { id: "INV-2024-098", client: "Sophie Leduc", amount: 8900, due: "2024-07-05", status: "pending", days: 0 },
];

const payables = [
  { id: "BILL-554", supplier: "Matériaux Québec", amount: 3200, due: "2024-06-25", category: "Matériaux" },
  { id: "BILL-558", supplier: "Outillage Nord", amount: 450, due: "2024-06-28", category: "Équipement" },
  { id: "BILL-560", supplier: "Pépinière Verte", amount: 1800, due: "2024-07-01", category: "Végétal" },
];

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Finance & Intelligence d'Affaires</h1>
          <p className="text-muted-foreground mt-1">Pilotage de la rentabilité et gestion du cashflow.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" /> Rapport Mensuel
          </Button>
          <Button>
            <Filter className="w-4 h-4 mr-2" /> Exercice 2024
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-background border-green-100 dark:border-green-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-900 dark:text-green-100">Chiffre d'Affaires (YTD)</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">640,000 $</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-600"/> +18% vs 2023
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Marge Brute Moy.</CardTitle>
            <Wallet className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">32.5 %</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-600"/> +2.1% vs Cible
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Comptes à Recevoir</CardTitle>
            <FileText className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-700">28,550 $</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-red-600"/> Dont 17k$ en retard
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Comptes à Payer</CardTitle>
            <CreditCard className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700">5,450 $</div>
            <p className="text-xs text-muted-foreground">À régler avant le 30</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chart 1: Sales vs Expenses */}
        <Card className="col-span-2">
            <CardHeader>
                <CardTitle>Performance Financière</CardTitle>
                <CardDescription>Comparatif Ventes (CA) vs Dépenses Opérationnelles (COGS)</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                            <Tooltip 
                                cursor={{fill: 'transparent'}}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                            />
                            <Legend />
                            <Bar dataKey="ventes" name="Ventes" fill="#10b981" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="depenses" name="Dépenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

        {/* List 1: Accounts Receivable */}
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-1">
                    <CardTitle className="text-orange-700">Comptes à Recevoir (Clients)</CardTitle>
                    <CardDescription>Factures émises non encaissées.</CardDescription>
                </div>
                <Button size="sm" variant="ghost" className="text-orange-600">Tout voir</Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Client / Facture</TableHead>
                            <TableHead className="text-right">Montant</TableHead>
                            <TableHead className="text-right">Échéance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {receivables.map((inv) => (
                            <TableRow key={inv.id}>
                                <TableCell>
                                    <div className="font-medium">{inv.client}</div>
                                    <div className="text-xs text-muted-foreground">{inv.id}</div>
                                </TableCell>
                                <TableCell className="text-right font-bold">
                                    {inv.amount.toLocaleString()} $
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="text-sm">{inv.due}</div>
                                    {inv.status === 'late' && (
                                        <Badge variant="destructive" className="h-5 px-1.5 text-[10px] mt-1">
                                            +{inv.days}j retard
                                        </Badge>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        {/* List 2: Accounts Payable */}
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-1">
                    <CardTitle className="text-purple-700">Comptes à Payer (Fournisseurs)</CardTitle>
                    <CardDescription>Factures reçues à régler.</CardDescription>
                </div>
                <Button size="sm" variant="ghost" className="text-purple-600">Tout voir</Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fournisseur</TableHead>
                            <TableHead className="text-right">Montant</TableHead>
                            <TableHead className="text-right">Échéance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payables.map((bill) => (
                            <TableRow key={bill.id}>
                                <TableCell>
                                    <div className="font-medium">{bill.supplier}</div>
                                    <div className="text-xs text-muted-foreground">{bill.category}</div>
                                </TableCell>
                                <TableCell className="text-right font-medium">
                                    {bill.amount.toLocaleString()} $
                                </TableCell>
                                <TableCell className="text-right text-sm">
                                    {bill.due}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

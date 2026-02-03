
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Calendar, MapPin, Users, CheckSquare, Clock, ArrowRight, Clipboard, HardHat, Camera, AlertTriangle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function WorkOrdersPage() {
  const workOrders = [
    {
      id: "OT-24-101",
      date: "Aujourd'hui, 07:00",
      project: "Mme. Tremblay - Piscine",
      type: "Excavation",
      team: "Équipe Alpha",
      foreman: "Marc C.",
      status: "in_progress",
      tasksCompleted: 2,
      tasksTotal: 5,
      address: "123 Rue des Érables"
    },
    {
      id: "OT-24-102",
      date: "Aujourd'hui, 08:30",
      project: "Parc Floral - Ville",
      type: "Entretien",
      team: "Équipe Vert",
      foreman: "Sophie L.",
      status: "not_started",
      tasksCompleted: 0,
      tasksTotal: 8,
      address: "Parc Central, Secteur Nord"
    },
    {
      id: "OT-24-099",
      date: "Hier",
      project: "M. Gagnon - Haies",
      type: "Taille",
      team: "Équipe Alpha",
      foreman: "Marc C.",
      status: "completed",
      tasksCompleted: 4,
      tasksTotal: 4,
      address: "45 Av. du Bois"
    },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'in_progress': return "bg-blue-500";
      case 'completed': return "bg-green-500";
      default: return "bg-slate-300";
    }
  };

  return (
    <div className="space-y-6 h-[calc(100vh-6rem)] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Ordres de Travail</h1>
          <p className="text-muted-foreground mt-1">Planification journalière et suivi d'exécution terrain.</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Créer OT
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 flex-1 overflow-hidden">
        {/* Left Column: List/Kanban */}
        <Card className="lg:col-span-1 flex flex-col h-full border-none shadow-none bg-transparent">
             <div className="mb-4 flex gap-2">
                <Input placeholder="Rechercher un OT..." className="bg-card" />
                <Button variant="outline" size="icon"><Calendar className="w-4 h-4"/></Button>
             </div>
             
             <ScrollArea className="flex-1 pr-4">
                <div className="space-y-3">
                    {/* Group: Today */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Aujourd'hui (2)
                    </div>
                    
                    {workOrders.filter(ot => ot.date.includes("Aujourd'hui")).map(ot => (
                        <Card key={ot.id} className="cursor-pointer hover:border-primary transition-colors group">
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="outline" className="font-mono text-xs">{ot.id}</Badge>
                                    <Badge className={ot.status === 'in_progress' ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : "bg-slate-100 text-slate-800 hover:bg-slate-100"}>
                                        {ot.status === 'in_progress' ? 'En Cours' : 'À Faire'}
                                    </Badge>
                                </div>
                                <h3 className="font-bold text-sm truncate">{ot.project}</h3>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                    <HardHat className="w-3 h-3" /> {ot.type} • {ot.team}
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-1">
                                        <CheckSquare className="w-3 h-3 text-muted-foreground" />
                                        <span>{ot.tasksCompleted}/{ot.tasksTotal} tâches</span>
                                    </div>
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Group: History */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mt-6 mb-2">
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        Terminés Récents
                    </div>
                     {workOrders.filter(ot => !ot.date.includes("Aujourd'hui")).map(ot => (
                        <Card key={ot.id} className="opacity-75 hover:opacity-100 transition-opacity">
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="outline" className="font-mono text-xs">{ot.id}</Badge>
                                    <Badge variant="secondary" className="bg-green-50 text-green-700">Terminé</Badge>
                                </div>
                                <h3 className="font-medium text-sm truncate">{ot.project}</h3>
                            </CardContent>
                        </Card>
                     ))}
                </div>
             </ScrollArea>
        </Card>

        {/* Right Column: Detail View */}
        <Card className="lg:col-span-2 h-full flex flex-col overflow-hidden">
            <CardHeader className="border-b border-border bg-muted/20 pb-4">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-xl font-bold">OT-24-101 : Excavation Piscine</h2>
                            <Badge className="bg-blue-600">En Cours</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> 123 Rue des Érables</span>
                            <span className="flex items-center gap-1"><Users className="w-3 h-3"/> Équipe Alpha (Chef: Marc C.)</span>
                        </div>
                    </div>
                    <Button variant="destructive" size="sm">
                        <AlertTriangle className="w-4 h-4 mr-2" /> Signaler Problème
                    </Button>
                </div>
            </CardHeader>
            
            <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-8">
                    {/* Checklist */}
                    <div>
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <CheckSquare className="w-5 h-5 text-primary" />
                            Liste de Tâches
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors">
                                <div className="mt-0.5 h-5 w-5 rounded border border-primary bg-primary text-primary-foreground flex items-center justify-center">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm line-through text-muted-foreground">Sécurisation du périmètre</p>
                                    <p className="text-xs text-muted-foreground">Installation des clôtures temporaires.</p>
                                </div>
                                <span className="text-xs text-muted-foreground">07:15</span>
                            </div>
                            
                             <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors">
                                <div className="mt-0.5 h-5 w-5 rounded border border-primary bg-primary text-primary-foreground flex items-center justify-center">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm line-through text-muted-foreground">Marquage au sol</p>
                                </div>
                                <span className="text-xs text-muted-foreground">08:00</span>
                            </div>

                            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
                                <div className="mt-0.5 h-5 w-5 rounded border border-primary flex items-center justify-center"></div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm">Excavation Principale</p>
                                    <p className="text-xs text-muted-foreground">Profondeur requise: 5 pieds. Attention aux racines.</p>
                                </div>
                                <Button size="sm" variant="secondary" className="h-6 text-xs">Démarrer</Button>
                            </div>
                            
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card opacity-60">
                                <div className="mt-0.5 h-5 w-5 rounded border border-muted-foreground/30"></div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm">Évacuation de la terre</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Materials & Photos */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                             <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Clipboard className="w-5 h-5 text-orange-500" />
                                Matériaux (Picking List)
                            </h3>
                            <Card>
                                <CardContent className="p-0">
                                    <div className="p-3 border-b border-border text-sm flex justify-between">
                                        <span>Géotextile (Rouleaux)</span>
                                        <Badge variant="outline">2 u</Badge>
                                    </div>
                                    <div className="p-3 border-b border-border text-sm flex justify-between">
                                        <span>Gravier 0-3/4 (Vrac)</span>
                                        <Badge variant="outline">15 t</Badge>
                                    </div>
                                     <div className="p-3 text-sm flex justify-between text-muted-foreground">
                                        <span>Drain agricole 4"</span>
                                        <Badge variant="secondary">Optionnel</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        
                         <div>
                             <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Camera className="w-5 h-5 text-purple-500" />
                                Preuves Visuelles
                            </h3>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20 cursor-pointer hover:bg-muted/80">
                                    <div className="text-center">
                                        <Camera className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                                        <span className="text-xs text-muted-foreground">Avant Travaux</span>
                                    </div>
                                </div>
                                 <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20 cursor-pointer hover:bg-muted/80">
                                    <div className="text-center">
                                        <Plus className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                                        <span className="text-xs text-muted-foreground">Ajouter photo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
             <CardFooter className="border-t border-border bg-muted/20 p-4">
                <div className="w-full flex justify-between items-center">
                    <div className="text-sm">
                        <span className="text-muted-foreground">Temps écoulé:</span> <span className="font-mono font-bold">03:45:12</span>
                    </div>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                        Terminer l'Ordre de Travail
                    </Button>
                </div>
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}

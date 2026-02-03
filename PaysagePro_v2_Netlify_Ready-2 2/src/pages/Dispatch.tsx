
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, ChevronLeft, ChevronRight, GripVertical, AlertCircle, CheckCircle2, MoreHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Mock Data
const backlogItems = [
  { id: "CMD-042", client: "Mme. Tremblay", project: "Piscine & Pavé", hours: 40, type: "Excavation", status: "ready" },
  { id: "CMD-045", client: "M. Gagnon", project: "Taille de Haies", hours: 8, type: "Entretien", status: "ready" },
  { id: "CMD-050", client: "Ville QC", project: "Parc Floral", hours: 120, type: "Maintenance", status: "blocked", reason: "Matériaux manquants" },
];

const teams = [
  { id: "T1", name: "Équipe Alpha", type: "Construction", members: ["Marc", "Luc"] },
  { id: "T2", name: "Équipe Bêta", type: "Entretien", members: ["Sophie", "Paul"] },
  { id: "T3", name: "Équipe Gamma", type: "Finition", members: ["Jean"] },
];

const initialAssignments = [
  { id: "ASS-1", teamId: "T1", day: 0, hours: 8, project: "Mme. Tremblay", color: "bg-blue-200 border-blue-400 text-blue-800" },
  { id: "ASS-2", teamId: "T1", day: 1, hours: 8, project: "Mme. Tremblay", color: "bg-blue-200 border-blue-400 text-blue-800" },
  { id: "ASS-3", teamId: "T2", day: 0, hours: 4, project: "M. Gagnon", color: "bg-green-200 border-green-400 text-green-800" },
];

export default function DispatchPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Simple week view logic (Mon-Fri)
  const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven"];

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Planning & Dispatch</h1>
          <p className="text-muted-foreground mt-1">Assignation des équipes et gestion des ressources.</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="flex items-center bg-card border border-input rounded-md p-1 mr-4">
              <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronLeft className="w-4 h-4"/></Button>
              <span className="text-sm font-medium px-2 w-32 text-center">Semaine 42</span>
              <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronRight className="w-4 h-4"/></Button>
           </div>
           <Button>Publier Planning</Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden">
        {/* LEFT PANEL: BACKLOG (3 cols) */}
        <Card className="col-span-3 flex flex-col h-full bg-muted/30 border-dashed">
          <CardHeader className="pb-3 px-4 pt-4">
            <CardTitle className="text-sm font-bold flex justify-between items-center">
                CHANTIERS À PLANIFIER
                <Badge variant="secondary">{backlogItems.length}</Badge>
            </CardTitle>
            <div className="relative mt-2">
                <Search className="absolute left-2 top-2 h-3.5 w-3.5 text-muted-foreground" />
                <Input placeholder="Filtrer..." className="h-8 pl-8 text-xs bg-background" />
            </div>
          </CardHeader>
          <ScrollArea className="flex-1 px-4 pb-4">
            <div className="space-y-3">
                {backlogItems.map(item => (
                    <div key={item.id} className={cn(
                        "group bg-card border rounded-md p-3 shadow-sm cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-primary/20 transition-all",
                        item.status === 'blocked' ? "opacity-75 bg-red-50 dark:bg-red-950/10 border-red-200" : ""
                    )}>
                        <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-sm truncate w-3/4">{item.project}</span>
                            <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-50" />
                        </div>
                        <div className="flex justify-between items-end">
                             <div>
                                <p className="text-xs text-muted-foreground">{item.client}</p>
                                <Badge variant="outline" className="text-[10px] h-5 mt-1">{item.type}</Badge>
                             </div>
                             <div className="text-right">
                                {item.status === 'blocked' ? (
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <AlertCircle className="w-4 h-4 text-red-500" />
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom" className="text-xs bg-red-600 text-white border-0">
                                            Bloqué: {item.reason}
                                        </TooltipContent>
                                    </Tooltip>
                                ) : (
                                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                                        {item.hours}h
                                    </Badge>
                                )}
                             </div>
                        </div>
                    </div>
                ))}
            </div>
          </ScrollArea>
        </Card>

        {/* RIGHT PANEL: TIMELINE (9 cols) */}
        <Card className="col-span-9 flex flex-col h-full overflow-hidden border-0 shadow-none bg-transparent">
            {/* Header Row (Days) */}
            <div className="grid grid-cols-6 border-b border-border bg-card rounded-t-lg">
                <div className="p-3 border-r font-bold text-sm text-muted-foreground flex items-center justify-center bg-muted/20">
                    ÉQUIPES
                </div>
                {weekDays.map((day, i) => (
                    <div key={day} className="p-3 border-r last:border-r-0 text-center relative group">
                        <span className="text-sm font-bold block">{day}</span>
                        <span className="text-xs text-muted-foreground">Oct {14 + i}</span>
                        {/* Daily Capacity Indicator */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500/20 group-hover:bg-green-500/40 transition-colors"></div>
                    </div>
                ))}
            </div>

            {/* Scrollable Grid */}
            <ScrollArea className="flex-1 bg-card border-x border-b rounded-b-lg">
                <div className="min-w-[800px]">
                    {teams.map(team => (
                        <div key={team.id} className="grid grid-cols-6 border-b border-border min-h-[100px] hover:bg-muted/5 transition-colors">
                            {/* Team Header Column */}
                            <div className="p-3 border-r border-border bg-muted/10 flex flex-col justify-center">
                                <div className="font-bold text-sm text-foreground">{team.name}</div>
                                <div className="text-xs text-muted-foreground mt-1">{team.members.join(", ")}</div>
                                <Badge variant="secondary" className="mt-2 w-fit text-[10px] h-5">{team.type}</Badge>
                            </div>
                            
                            {/* Days Columns */}
                            {weekDays.map((_, dayIndex) => {
                                // Find assignments for this team/day
                                const assignments = initialAssignments.filter(a => a.teamId === team.id && a.day === dayIndex);
                                
                                return (
                                    <div key={dayIndex} className="border-r border-border p-2 relative group min-h-[100px]">
                                        {/* Drop Zone Visual Hint */}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                                        
                                        {/* Assign Button (Hover) */}
                                        <Button variant="ghost" size="icon" className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 z-10">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </Button>

                                        {/* Assignments */}
                                        <div className="space-y-2">
                                            {assignments.map(assign => (
                                                <div key={assign.id} className={cn("p-2 rounded text-xs border shadow-sm cursor-pointer hover:shadow-md transition-shadow", assign.color)}>
                                                    <div className="font-bold truncate">{assign.project}</div>
                                                    <div className="flex justify-between items-center mt-1 opacity-80">
                                                        <span>{assign.hours}h</span>
                                                        <CheckCircle2 className="w-3 h-3" />
                                                    </div>
                                                </div>
                                            ))}
                                            
                                            {/* Empty State / Capacity Slot */}
                                            {assignments.length === 0 && (
                                                <div className="h-full w-full flex items-center justify-center text-muted-foreground/20 text-xs font-medium border-2 border-dashed border-transparent group-hover:border-muted-foreground/20 rounded">
                                                    Dispo
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                    
                    {/* Unavailability Rows (Example: Truck Maintenance) */}
                     <div className="grid grid-cols-6 border-b border-border min-h-[60px] bg-slate-50 dark:bg-slate-900/50">
                        <div className="p-3 border-r border-border flex items-center text-xs font-medium text-muted-foreground">
                            Camion Grue (Maintenance)
                        </div>
                        <div className="col-span-5 p-2 flex items-center">
                             <div className="w-full h-8 bg-stripes-gray rounded border border-border flex items-center justify-center text-xs text-muted-foreground">
                                 Indisponible pour maintenance annuelle
                             </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </Card>
      </div>
      
      <style>{`
        .bg-stripes-gray {
            background-image: linear-gradient(45deg, #0000000d 25%, transparent 25%, transparent 50%, #0000000d 50%, #0000000d 75%, transparent 75%, transparent);
            background-size: 1rem 1rem;
        }
      `}</style>
    </div>
  );
}

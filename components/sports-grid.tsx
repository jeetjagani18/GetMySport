import { Trophy, Zap, Target, Users, Dumbbell, Waves, Bike, Swords, Heart, Monitor } from "lucide-react"

const sports = [
  { name: "Cricket", icon: Trophy },
  { name: "Football", icon: Zap },
  { name: "Badminton", icon: Target },
  { name: "Tennis", icon: Target },
  { name: "Table Tennis", icon: Target },
  { name: "Basketball", icon: Users },
  { name: "Volleyball", icon: Users },
  { name: "Swimming", icon: Waves },
  { name: "Skating", icon: Bike },
  { name: "Kabaddi", icon: Swords },
  { name: "Boxing", icon: Swords },
  { name: "Fitness", icon: Dumbbell },
  { name: "Yoga", icon: Heart },
  { name: "Esports", icon: Monitor },
]

export function SportsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
      {sports.map((sport) => {
        const Icon = sport.icon
        return (
          <div
            key={sport.name}
            className="flex flex-col items-center p-6 rounded-xl bg-card hover:bg-muted/50 transition-all duration-200 group hover:shadow-md border border-border/50"
          >
            <Icon className="h-10 w-10 mb-3 text-primary group-hover:text-secondary transition-colors duration-200" />
            <span className="text-sm font-medium text-center font-heading">{sport.name}</span>
          </div>
        )
      })}
    </div>
  )
}

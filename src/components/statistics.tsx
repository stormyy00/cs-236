import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type StatCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  value: string | number;
  change?: number;
  description?: string;
};

const StatCard = ({
  icon: Icon,
  title,
  value,
  change,
  description,
}: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {typeof change === "number" && (
        <p
          className={`text-xs ${change > 0 ? "text-green-600" : "text-red-600"}`}
        >
          {change > 0 ? "+" : ""}
          {change}% from last month
        </p>
      )}
      {description && (
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      )}
    </CardContent>
  </Card>
);

export default StatCard;

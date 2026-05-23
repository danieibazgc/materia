import type { MaterialRequest } from "@/types";
import Badge from "./Badge";

interface RequestRowProps {
  request: MaterialRequest;
}

const urgencyMap = {
  alta: "urgency-alta",
  media: "urgency-media",
  baja: "urgency-baja",
} as const;

const urgencyLabels = {
  alta: "Urgente",
  media: "Normal",
  baja: "Baja",
} as const;

const RequestRow = ({ request }: RequestRowProps) => {
  return (
    <div className="flex items-center justify-between px-5 py-4 hover:bg-gray-50/50 transition-colors">
      <div className="flex items-center gap-3 min-w-0">
        {request.active && (
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse shrink-0" />
        )}
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {request.title}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            {request.quantity} · {request.location}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0 ml-4">
        <Badge variant={urgencyMap[request.urgency]}>
          {urgencyLabels[request.urgency]}
        </Badge>
        <span className="text-xs text-gray-300 hidden sm:inline">
          {request.date}
        </span>
      </div>
    </div>
  );
};

export default RequestRow;

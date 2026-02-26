type Status = "success" | "warning" | "error";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: Status;
  label?: string;
}

const statusClasses: Record<Status, string> = {
  success: "bg-green-500 text-green-800",
  warning: "bg-yellow-500 text-yellow-800",
  error: "bg-red-800 text-red-800",
};

export default function Badge({ status, label, ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status]}`}
      {...rest}
    >
      {label ?? status}
    </span>
  );
}

type Size = "sm" | "md" | "lg";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  name: string;
  size?: Size; // ← optional now
  isOnline?: boolean;
}

const sizeClasses: Record<Size, string> = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

export default function Avatar({
  src,
  name,
  size = "md", // ← default here, not in JSX
  isOnline,
  className, // ← extract so we can merge
  ...rest // ← everything else passes through
}: AvatarProps) {
  return (
    <div className="relative inline-flex items-center">
      <img
        src={src}
        alt={name}
        className={`${sizeClasses[size]} rounded-full object-cover ${className ?? ""}`}
        {...rest}
      />
      {isOnline && <span className="absolute bottom-0 right-0 text-green-500">●</span>}
    </div>
  );
}

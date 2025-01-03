interface BadgeProps {
  text: string;
  variant?: "cold" | "warm" | "discovery" | "post-sales";
}

const variants = {
  cold: "bg-blue-100 text-blue-600",
  warm: "bg-orange-100 text-orange-600",
  discovery: "bg-green-100 text-green-600",
  "post-sales": "bg-purple-100 text-purple-600",
};

export default function Badge({ text, variant = "cold" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}
    >
      {text}
    </span>
  );
}

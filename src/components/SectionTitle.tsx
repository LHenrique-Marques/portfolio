interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: Props) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 ${className ?? ""}`}
    >
      {children}
    </h2>
  );
}

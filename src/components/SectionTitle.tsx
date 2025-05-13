interface Props {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
      {children}
    </h2>
  );
}

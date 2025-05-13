interface Props {
  name: string;
}

export default function SkillBadge({ name }: Props) {
  return (
    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm shadow-sm">
      {name}
    </span>
  );
}

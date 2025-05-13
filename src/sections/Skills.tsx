import SkillBadge from "../components/SkillBadge";
export default function Skills() {
  return (
    <div className="flex gap-4 flex-wrap">
      <SkillBadge name="Python" />
      <SkillBadge name="TypeScript" />
    </div>
  );
}
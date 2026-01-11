export function Skills({ skills, title }: { skills: Array<{ name: string }>; title: string }) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <ul className="space-y-2 text-sm">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Props {
  skill: Skill;
}

const Skill = ({ skill }: Props) => {
  return (
    <div className="flex w-44 flex-col items-start justify-start gap-2.5">
      <h4 className="font-display text-2xl font-bold leading-[30px] text-magentaPink">
        {skill.name}
      </h4>
      <ul className="list-inside pl-1 text-base font-normal leading-snug tracking-wide">
        {skill.list.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;

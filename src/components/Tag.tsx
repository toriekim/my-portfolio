interface Props {
  name: string;
}

const Tag = ({ name }: Props) => {
  return (
    <div className="mr-1 flex items-start justify-start rounded-[3px] bg-chartreuse px-3.5 py-2 dark:bg-magentaPink">
      <p className="text-center text-xs font-normal leading-[15px] tracking-tight text-darkEmerald dark:text-yellowParchment">
        {name}
      </p>
    </div>
  );
};

export default Tag;

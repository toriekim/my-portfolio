const StoryPage = () => {
  const regText = 'text-base font-normal leading-9 dark:font-light';
  const bgText =
    'w-full bg-chartreuse py-0.5 font-display text-lg font-semibold leading-snug dark:bg-magentaPink';

  return (
    <div className="flex flex-col items-center justify-center px-8 py-[120px] sm:px-[15vw] lg:px-[20vw]">
      <div className="flex flex-col items-start justify-start gap-[60px]">
        <p className="font-display text-2xl font-bold leading-9 tracking-wide text-magentaPink dark:text-chartreuse lg:text-3xl">
          When I was 5, I got adbucted by a unicorn family. When they returned
          me to earth, I joined a designer school. But, fo&apos; real, what I
          learned with my kidnaptive family really gave an edge to my creative
          language.
        </p>

        <div className="text-red flex flex-col items-start justify-start gap-1">
          <p className={`${bgText}`}>
            Being a human is way too complicated. Time to be a unicorn.
          </p>
          <p className={`${regText}`}>
            Try it and you&apos;ll see. Then your Figma files are just gonna fly
            in color, glitter, interactions and autolayout.
          </p>
          <p className={`${bgText}`}>
            Also, grow a beard. Check my bio if that is not clear.
          </p>
          <p className={`${regText}`}>
            Available for projects, from Monday to Tuesday, mainy between 14 and
            16. (Unless there is a unicorn race on TV - DUH -in that case, come
            back another day).
          </p>
          <p className={`${regText}`}>
            Projects include, RocknRoll covers, furniture refurbishing, Unicorn
            potty training and more.
          </p>
        </div>
      </div>
    </div>
  );
};
export default StoryPage;

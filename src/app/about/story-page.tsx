const StoryPage = () => {
  const regText = 'my-1 text-base font-normal leading-9 dark:font-light';
  const bgText =
    'w-full bg-chartreuse py-0.5 font-display text-lg font-semibold leading-snug dark:bg-magentaPink';
  const bgItalic = 'italic tracking-wide';

  return (
    <div className="flex flex-col items-center justify-center px-8 py-[120px] sm:px-[15vw] lg:px-[20vw]">
      <div className="flex flex-col items-start justify-start gap-[60px]">
        <p className="font-display text-2xl font-bold leading-9 tracking-wide text-magentaPink dark:text-chartreuse lg:text-3xl">
          As a developer with a{' '}
          <span className={`${bgItalic}`}>rich background</span> in writing and
          editing, graphic design, and hospitality, during which I honed my
          communication and problem-solving skills, I bring a{' '}
          <span className={`${bgItalic}`}>unique combination</span> of
          creativity, technical ability, and seasoned work ethic to the tech
          industry.
        </p>
        <div className="text-red flex flex-col items-start justify-start gap-1">
          <p className={`${bgText}`}>
            I graduated from{' '}
            <span className={`${bgItalic}`}>Emerson College</span> in 2012 with
            a Bachelor of Fine Arts (BFA) in Writing, Literature, and
            Publishing. Accidentally minored in Art History.
          </p>
          <p className={`${regText}`}>
            In 2016, while pursuing a certificate in graphic design at the
            School of the Museum of Fine Arts (SMFA) at Tufts University, I fell
            in love with web design.{' '}
            <span className={`${bgItalic}`}>
              I caught the coding bug during a week-long Web Design and
              Development course.
            </span>
          </p>
          <p className={`${bgText}`}>
            I had finally found something that combined my creativity with my
            love of puzzles and solving them! I was hooked on that{' '}
            <span className={`${bgItalic}`}>exhilarating feeling</span> of
            solving a coding problem and creating something with code.
          </p>
          <p className={`${regText}`}>
            So, I started my self-learning journey before applying to the Grace
            Hopper Program at Fullstack Academy, a 17-week immersive full-stack
            course.{' '}
            <span className="italic">
              After 553 hours of coursework and project building, I graduated in
              July 2021
            </span>
            .
          </p>
          <p className={`${regText}`}>
            I continued my journey as a{' '}
            <span className="italic">Teaching Fellow</span> at Fullstack Academy
            and then as a <span className="italic">Software Engineer</span> on
            the Web Development team at Liftoff Mobile (Influence product,
            formerly Jetfuel).
          </p>
          <p className={`${bgText}`}>
            I love to challenge myself and have found that I thrive in diverse,{' '}
            <span className={`${bgItalic}`}>dynamic environments</span> where I
            can contribute to the product vision and learn from others.
          </p>
          <p className={`${regText} italic`}>
            At the end of the day, I&apos;d like to think of myself as a
            lifelong learner who is continuously growing to improve my craft.
          </p>
        </div>
      </div>
    </div>
  );
};
export default StoryPage;

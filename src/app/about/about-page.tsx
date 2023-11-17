const AboutPage = () => {
  return (
    <div className="mx-14 my-20 flex h-[50vh] flex-row items-center gap-4 ">
      <h1 className="flex-1 self-start font-display text-[7vw] leading-[1em] tracking-wider text-primaryGreen dark:text-yellowParchment">
        About Me
      </h1>
      <div className="flex-1 self-end">
        <p>
          With 3 years in the industry and over 10 years of professional
          experience, I’m a scrappy learner who loves solving challenging
          puzzles and is driven to translate solutions into robust applications
          with meaningful impact. I have a rich background in writing and
          editing, graphic design, and hospitality.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

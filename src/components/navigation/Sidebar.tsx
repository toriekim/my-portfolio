import MenuLinks from './MenuLinks';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  theme: string | undefined;
  setTheme(theme: string): void;
}

const Sidebar = ({ isOpen, toggle, theme, setTheme }: Props) => {
  return (
    <div
      className="fixed left-0 z-50 h-full w-full justify-center overflow-hidden bg-yellowParchment pt-[120px] dark:bg-darkEmerald"
      style={{
        opacity: `${isOpen ? '1' : '0'}`,
        top: ` ${isOpen ? '0' : '-100%'}`,
      }}
    >
      <button className="absolute right-10 top-6" onClick={toggle}>
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 25 25"
        >
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            className="fill-darkEmerald dark:fill-yellowParchment"
          />
        </svg>
      </button>

      <MenuLinks theme={theme} setTheme={setTheme} toggle={toggle} />
    </div>
  );
};

export default Sidebar;

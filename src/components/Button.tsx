interface Props {
  containerClass: string;
  buttonClass: string;
  buttonText: string;
}

const Button = ({ containerClass, buttonClass, buttonText }: Props) => {
  return (
    <div
      className={'flex w-full flex-col items-center' + (containerClass ?? '')}
    >
      <button
        className={
          'w-full rounded-[5px] text-center font-normal leading-tight tracking-wide ' +
          (buttonClass ?? '')
        }
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;

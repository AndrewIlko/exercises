import clsx from "clsx";

const Input = (props: any) => {
  const { label, className, labelStyle, ...otherProps } = props;

  return (
    <>
      <div className="flex flex-col">
        {label && (
          <label className={clsx("mb-[5px]", labelStyle)}>{label}</label>
        )}
        <input
          className={clsx(
            `border rounded-[4px] outline-none px-[10px] py-[5px]`,
            className
          )}
          {...otherProps}
        />
      </div>
    </>
  );
};

export default Input;

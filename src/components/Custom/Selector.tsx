import clsx from "clsx";
import { nanoid } from "nanoid/non-secure";

const Selector = (props: any) => {
  const { label, className, labelStyle, options, ...otherProps } = props;

  return (
    <>
      <div className="flex flex-col">
        {label && (
          <label className={clsx("mb-[5px]", labelStyle)}>{label}</label>
        )}
        <select
          className={clsx(
            `border rounded-[4px] outline-none px-[10px] py-[5px]`,
            className
          )}
          {...otherProps}
        >
          <option value={""}>None</option>
          {options.map((optionValue: any) => {
            return <option key={nanoid()}>{optionValue}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default Selector;

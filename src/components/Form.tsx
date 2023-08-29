import clsx from "clsx";
import Input from "./Custom/Input";
import SimpleLoader from "./Custom/SimpleLoader";
import Selector from "./Custom/Selector";
import { difficulties, muscles, types } from "./consts";

const Form = (props: {
  handleSubmit: Function;
  fetchParams: any;
  setFetchParams: any;
  isLoading: boolean;
  isSubmitDisabled: boolean;
}) => {
  const {
    handleSubmit,
    fetchParams,
    setFetchParams,
    isLoading,
    isSubmitDisabled,
  } = props;

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full bg-[#fff] rounded-[10px] px-[20px] py-[12px] flex flex-col mt-[15px]"
      >
        <div className="flex flex-col gap-[20px]">
          <Input
            value={fetchParams["name"]}
            label={"Name"}
            onChange={(e: any) =>
              setFetchParams((prev: any) => ({ ...prev, name: e.target.value }))
            }
          />
          <Selector
            options={types}
            value={fetchParams["type"]}
            label={"Type"}
            onChange={(e: any) =>
              setFetchParams((prev: any) => ({ ...prev, type: e.target.value }))
            }
          />
          <Selector
            options={muscles}
            value={fetchParams["muscle"]}
            label={"Muscle"}
            onChange={(e: any) =>
              setFetchParams((prev: any) => ({
                ...prev,
                muscle: e.target.value,
              }))
            }
          />
          <Selector
            options={difficulties}
            value={fetchParams["difficulty"]}
            label={"Difficulty"}
            onChange={(e: any) =>
              setFetchParams((prev: any) => ({
                ...prev,
                difficulty: e.target.value,
              }))
            }
          />
        </div>
        <div className="mt-[15px]">
          <button
            disabled={isSubmitDisabled}
            className={clsx(
              "mt-auto  transition-all duration-300 px-[20px] py-[8px] rounded-[4px] w-full min-h-[40px] flex justify-center items-center",
              {
                "bg-neutral-500": isSubmitDisabled,
                "bg-red-600 hover:bg-red-700": !isSubmitDisabled,
              }
            )}
          >
            {!isLoading && (
              <>
                <span className="font-[500] text-[#fff] ">Get</span>
              </>
            )}
            {isLoading && (
              <>
                <SimpleLoader className="" />
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;

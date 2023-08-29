const ErrorAlert = () => {
  return (
    <>
      <div className="w-full rounded-[10px] h-[200px] border-[2px] border-red-300 my-[15px] bg-[#fff] flex justify-center items-center">
        <span className="font-[500] text-red-500">
          Something went wrong, try again
        </span>
      </div>
    </>
  );
};

export default ErrorAlert;

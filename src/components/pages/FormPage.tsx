import { useState } from "react";
import Form from "../Form";
import { useNavigate } from "react-router-dom";
import { queryStrFromObject } from "../../helpers";

const FormPage = () => {
  const [fetchParams, setFetchParams] = useState({
    name: "",
    type: "",
    muscle: "",
    difficulty: "",
  });

  const navigate = useNavigate();

  const handleSumbit = () => {
    navigate(`/exercises?${queryStrFromObject(fetchParams)}`);
  };

  return (
    <>
      <div className="min-h-[100vh] flex flex-col justify-center items-center bg-[#f1f6fe]">
        <div className="max-w-[400px] w-full flex flex-col">
          <Form
            isSubmitDisabled={
              !Object.values(fetchParams).some((value) => value !== "")
            }
            handleSubmit={handleSumbit}
            fetchParams={fetchParams}
            setFetchParams={setFetchParams}
          />
        </div>
      </div>
    </>
  );
};

export default FormPage;

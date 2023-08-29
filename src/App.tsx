import { queryStrFromObject } from "./helpers";
import { useState } from "react";
import { useMutation } from "react-query";
import { fetchExercisesRequest } from "./services/exercises";
import Form from "./components/Form";
import ExercisesList from "./components/ExercisesList/ExercisesList";
import EmptyList from "./components/ExercisesList/EmptyList";
import ErrorAlert from "./components/ExercisesList/ErrorAlert";

const App = () => {
  const [fetchParams, setFetchParams] = useState({
    name: "",
    type: "",
    muscle: "",
    difficulty: "",
  });

  const [exercises, setExercises] = useState<null | any[]>(null);

  const {
    mutate: fetchExercises,
    isLoading,
    isError,
  } = useMutation(fetchExercisesRequest, {
    onSuccess: (responseData) => {
      setExercises(responseData);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchExercises(queryStrFromObject(fetchParams));
  };

  return (
    <>
      <div className="min-h-[100vh] flex flex-col justify-center items-center bg-[#f1f6fe]">
        <div className="max-w-[400px] w-full flex flex-col">
          <Form
            isSubmitDisabled={
              !Object.values(fetchParams).some((value) => value !== "")
            }
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            fetchParams={fetchParams}
            setFetchParams={setFetchParams}
          />
          {exercises && (
            <>
              {exercises.length === 0 && (
                <>
                  <EmptyList />
                </>
              )}
              {exercises.length !== 0 && (
                <>
                  <ExercisesList exercises={exercises} />
                </>
              )}
            </>
          )}
          {isError && (
            <>
              <ErrorAlert />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;

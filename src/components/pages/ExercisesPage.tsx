import { useState, useEffect } from "react";
import { fetchExercisesRequest } from "../../services/exercises";
import { useMutation } from "react-query";
import ErrorAlert from "../ExercisesList/ErrorAlert";
import ExercisesList from "../ExercisesList/ExercisesList";
import EmptyList from "../ExercisesList/EmptyList";
import { queryStrFromObject } from "../../helpers";
import SimpleLoader from "../Custom/SimpleLoader";
import { useNavigate } from "react-router-dom";

const ExercisesPage = () => {
  const [fetchParams, setFetchParams] = useState(
    Object.fromEntries(new URLSearchParams(window.location.search))
  );

  const [exercises, setExercises] = useState<null | any[]>(null);
  const navigate = useNavigate();

  const {
    mutate: fetchExercises,
    isLoading,
    isError,
  } = useMutation(fetchExercisesRequest, {
    onSuccess: (responseData) => {
      setExercises(responseData);
    },
  });

  useEffect(() => {
    if (Object.entries(fetchParams).length !== 0) {
      fetchExercises(queryStrFromObject(fetchParams));
    } else {
      navigate("/form");
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[100vh] flex flex-col justify-center items-center bg-[#f1f6fe]">
        <SimpleLoader className="w-[60px] h-[60px]" />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-[100vh] flex flex-col justify-center items-center bg-[#f1f6fe]">
        <div className="max-w-[400px] w-full flex flex-col">
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

export default ExercisesPage;

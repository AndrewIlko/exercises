import { nanoid } from "nanoid";

type Exercise = {
  "name": string;
  "type": string;
  "muscle": string;
  "equipment": string;
  "difficulty": string;
  "instructions": string;
};

const ExercisesListItem = (props: any) => {
  const {
    exercise: { name, type, muscle, equipment, difficulty, instructions },
  } = props;

  return (
    <>
      <div className=" bg-[#fff] rounded-[10px] px-[20px] py-[12px] min-h-[300px]">
        <h1 className="text-[18px] font-[600]">{name}</h1>
        <h1>{type}</h1>
        <div className="flex flex-col gap-[5px] mt-[15px]">
          <div>
            <span className="font-[500]">Muscle:</span> {muscle}
          </div>
          <div>
            <span className="font-[500]">Equipment:</span> {equipment}
          </div>
          <div>
            <span className="font-[500]">Difficulty:</span> {difficulty}
          </div>
        </div>
        <div className="mt-[20px]">
          <h1 className="font-[700]">Instructions</h1>
          <p className="mt-[5px]">{instructions}</p>
        </div>
      </div>
    </>
  );
};

const ExercisesList = (props: any) => {
  const { exercises } = props;

  return (
    <>
      <div className="flex flex-col gap-[15px] max-w-[400px] w-full my-[15px]">
        <ul className="flex flex-col w-full gap-[15px]">
          {exercises.map((exercise: Exercise) => {
            return (
              <li key={nanoid()}>
                <ExercisesListItem exercise={exercise} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ExercisesList;

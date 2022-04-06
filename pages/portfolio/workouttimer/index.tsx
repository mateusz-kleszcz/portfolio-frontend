import { loadInitialWorkouts } from "@actions/workoutActions/loadInitialWorkouts";
import CreateTimer from "@components/projects/workout-timer/CreateTimer";
import WorkoutsList from "@components/projects/workout-timer/WorkoutsList";
import styles from "@styles/WorkoutTimer.module.scss";
import { useDispatch } from "react-redux";
import { WorkoutWithID } from "types/WorkoutTimer";

interface WorkoutTimerProps {
  workouts: WorkoutWithID[];
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_ADDRESS}/api/workout`);
  const json = await res.json();
  return {
    props: {
      workouts: json.workouts,
    },
  };
};

const workouttimer = ({ workouts }: WorkoutTimerProps) => {
  const dispatch = useDispatch();
  dispatch(loadInitialWorkouts(workouts));

  return (
    <div className={styles.workoutTimer}>
      <CreateTimer />
      <WorkoutsList />
    </div>
  );
};

export default workouttimer;

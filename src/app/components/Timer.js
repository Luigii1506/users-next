import { useCallback, useEffect, useState } from "react";

const Timer = ({
  interval,
  isPaused,
  onTimerEnds,
  currentExercise,
  setCurrentExercise,
  exercises,
  setIsStarted,
  setIsPaused,
  setHasFinishedExercises,
}) => {
  const [countDownTime, setCountDownTime] = useState({
    minutes: "00",
    seconds: "00",
  });
  const [timeRemaining, setTimeRemaining] = useState(interval * 60 * 1000); // Tiempo restante en milisegundos
  const [hasFinished, setHasFinished] = useState(false);

  const handleExercisesTimer = useCallback(() => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      //setIsStarted(false);
      //setCurrentExercise(0);
      setHasFinishedExercises(true);
      setIsPaused(true);
    }
  }, [currentExercise, exercises.length, setCurrentExercise]);

  useEffect(() => {
    let intervalId;

    if (!isPaused && timeRemaining > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(intervalId);
            setCountDownTime({ minutes: "00", seconds: "00" });
            setHasFinished(true);
            return interval * 60 * 1000; // Reset the timer to 10 seconds for the next countdown
          } else {
            setHasFinished(false);
            const newTime = prevTime - 1000;
            const minutes = String(
              Math.floor((newTime % (60 * 60 * 1000)) / (1000 * 60))
            ).padStart(2, "0");
            const seconds = String(
              Math.floor((newTime % (60 * 1000)) / 1000)
            ).padStart(2, "0");
            setCountDownTime({ minutes, seconds });
            return newTime;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused, timeRemaining, handleExercisesTimer]);

  useEffect(() => {
    if (hasFinished) {
      handleExercisesTimer();
    }
  }, [timeRemaining, hasFinished]);

  return (
    <div className="bg-[#191A24]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc] w-full text-center">
                {countDownTime.minutes}
              </span>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc] w-full text-center">
                {countDownTime.seconds}
              </span>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

import { useEffect, useState, memo } from "react";
import dayjs from "dayjs";

const Clock = () => {
  const [time, setTime] = useState(() =>
    dayjs().format("ddd MMM D h:mm:ss A")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("ddd MMM D h:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <time>{time}</time>;
};

export default memo(Clock);

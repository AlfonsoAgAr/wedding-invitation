import { useState, useEffect } from 'react';

function calculateCountdown(targetDate: Date) {
  const targetDateTime = new Date(targetDate);
  const now = new Date();
  const difference = targetDateTime.valueOf() - now.valueOf();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24)) + 2;


  return days;
}

export function useCountdown(targetDate: Date) {
  const [countdown, setCountdown] = useState(calculateCountdown(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateCountdown(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return countdown;
}
  
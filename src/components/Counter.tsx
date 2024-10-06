import { useState, useEffect } from 'react';

function calculateCountdown(targetDate: Date) {
  const targetDateTime = new Date(targetDate);
  const now = new Date();
  const difference = targetDateTime.valueOf() - now.valueOf();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);   


  return { days, hours, minutes, seconds };
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
  
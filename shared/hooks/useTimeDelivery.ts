import TimePicker from "rc-time-picker";
import { useState, useEffect } from "react";

export const useTimeDelivery = (intervalMinutes: number, count: number) => {
  const [timeDelivery, setTimeDelivery] = useState(["По готовности"]);

  useEffect(() => {
    const options = ["По готовности"];
    const currentTime = new Date();

    // Добавляем 1 час к текущему времени
    const startTime = new Date(currentTime.getTime() + 60 * 60 * 1000);

    // Округляем время до ближайшего интервала
    const roundedTime = new Date(
      Math.ceil(startTime.getTime() / (intervalMinutes * 60 * 1000)) *
        (intervalMinutes * 60 * 1000)
    );

    for (let i = 0; i < count; i++) {
      const optionTime = new Date(
        roundedTime.getTime() + i * intervalMinutes * 60 * 1000
      );
      const formattedTime = optionTime.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      });
      options.push(formattedTime);
    }

    setTimeDelivery(options);
  }, [intervalMinutes, count]);

  return timeDelivery;
};

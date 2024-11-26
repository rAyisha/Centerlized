export const convertTo12HourFormat = (time: string | null) => {
    if (!time) return "Break";
    const [hour, minute] = time.split(":");
    const hourInt = parseInt(hour, 10);
    const isPM = hourInt >= 12;
    const convertedHour = hourInt % 12 === 0 ? 12 : hourInt % 12;
    return `${convertedHour}:${minute} ${isPM ? "PM" : "AM"}`;
  };
  
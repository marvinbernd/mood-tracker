import { ChevronLeft, ChevronRight } from "lucide-preact";
import { useState } from "preact/hooks";

const Calendar = ({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  return (
    <div class="px-6">
      <div class="flex justify-between items-center mb-6">
        <button onClick={goToPreviousMonth}>
          <ChevronLeft class="h-6 w-6" />
        </button>
        <h2 class="text-lg font-semibold">
          {monthNames[month]} {year}
        </h2>
        <button onClick={goToNextMonth}>
          <ChevronRight class="h-6 w-6" />
        </button>
      </div>

      <div class="grid grid-cols-7 text-center">
        {["M", "D", "M", "D", "F", "S", "S"].map((day, i) => (
          <div key={`day-${i}`} class="font-bold">
            {day}
          </div>
        ))}

        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;

          return (
            <div
              class={`cursor-pointer ${
                day === parseInt(selectedDate.split("-")[2])
                  ? "bg-blue-500 text-white rounded-full"
                  : ""
              }`}
              onClick={() => setSelectedDate(`${year}-${month + 1}-${day}`)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

// const today = new Date();

// // ✅ Get the first day of the current week (Sunday)
// const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));

// // ✅ Get the last day of the current week (Saturday)
// const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 6));

// console.log(firstDay); // 👉️ Sunday August 7 2022
// console.log(lastDay); // 👉️ Saturday August 13 2022

// v1.0.1

// consts
const weekInMs = 1000 * 60 * 60 * 24 * 7;
const dayInMs = 1000 * 60 * 60 * 24;
const dateNow = new Date();

// main function
export const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const getWeekArray = (currentDate = new Date(), page = 0) => {
    if (page > 0) {
        currentDate = new Date(currentDate.getTime() + weekInMs * page); // Add X weeks where X is page
    } else if (page < 0) {
        currentDate = new Date(currentDate.getTime() - weekInMs * (page * -1)); // Subtract X weeks where X is page
    } else {
        // page = 1 is already fine
    }

    // currentDate now includes pagination. We have any day inside correct week

    // Get closest monday in the past
    const mondayDate = new Date(currentDate.getTime());
    if (currentDate.getDay() == 0) {
        mondayDate.setDate(currentDate.getDate() - 7);
    } else {
        mondayDate.setDate(currentDate.getDate() - (currentDate.getDay()));
    }

    // Prepare result, 7 days of the week
    const mondayDateInMs = mondayDate.getTime();

    const daysOfWeek = Array.from(Array(7).keys()).map((dayIndex) => {
        return new Date(mondayDateInMs + dayInMs * dayIndex);
    });

    return daysOfWeek;
};

// Main code
// Page 0 means first page
// for (const page of [-3, -2, -1, 0, 1, 2, 3]) {
//  console.log(`Page ${page}:`, getWeekArray(dateNow, page));
// }

// console.log(getWeekArray(dateNow, 0).map((item, index) => `${daysName[index]} ${item} `));
// console.log(getWeekArray(dateNow, 0).map((item, index) => item.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"})));

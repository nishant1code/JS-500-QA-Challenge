// Q1: Write a switch statement that checks the value of a variable day and prints out the corresponding day of the week (e.g., "Monday", "Tuesday", etc.).
let dayNumber = 4;
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number entered");
        break;
}

// Q2: Write a switch statement that checks the value of a variable fruit and prints out a message based on the type of fruit (e.g., "Apple", "Banana", "Cherry"). Include a default case that handles unknown fruits.
let fruitName = "Orange";

switch (fruitName) {
    case "Apple":
        console.log("You choose Apple");
        break;
    case "Banana":
        console.log("You choose Banana");
        break;
    case "Cherry":
        console.log("You choose Cherry");
        break;
    default:
        console.log("No information available");
        break;
}

// Q3: Create a switch statement that evaluates a variable grade with possible values of 'A', 'B', 'C', 'D', or 'F' and prints out the corresponding description of the grade.
let gradeStr = "C";
switch (gradeStr) {
    case "A":
        console.log("Excelent");
        break;
    case "B":
        console.log("Great");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid Grade Input");
        break;
}

// Q4: Write a switch statement that takes a variable color and prints out a message based on the color (e.g., "Red", "Green", "Blue"). Include a default case for other colors.
let color = "Green";
switch (color) {
    case "Red":
        console.log("Fire");
        break;
    case "Green":
        console.log("Greenry");
        break;
    case "Blue":
        console.log("Sky");
        break;
    default:
        console.log("Other color");
        break;
}

// Q5: Write a switch statement to handle a variable season with possible values 'Winter', 'Spring', 'Summer', and 'Fall'. Print a message for each season.
let season = "Fall";
switch (season) {
    case "Winter":
        console.log("Winter is cold and often snowy.");
        break;
    case "Spring":
        console.log("Spring is mild with bloowing flowers");
        break;
    case "Summer":
        console.log("Summer is hot and sunny");
        break;
    case "Fall":
        console.log("Fall is cool with falling leaves");
        break;
    default:
        console.log("Not Available");
        break;
}

// Q6: Create a switch statement that evaluates a variable number and prints whether it is 'One', 'Two', 'Three', or 'Other' if it doesn't match those numbers.
let enterNumber = 4;
switch (enterNumber) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log("Other");
        break;
}

// Q7: Write a switch statement that checks the value of a variable age and prints a message for different age groups: 'Child', 'Teenager', 'Adult', and 'Senior'.
let ageGroup = 20;
switch (true) {
    case (ageGroup > 0 && ageGroup < 13):
        console.log("Child");
        break;
    case (ageGroup >= 13 && ageGroup <= 19):
        console.log("Teenager");
        break;
    case (ageGroup >= 20 && ageGroup < 60):
        console.log("Adult");
        break;
    case (ageGroup >= 60):
        console.log("Senior");
        break;
    default:
        console.log("No such age group available");
        break;
}

// Note on this question - we used 'switch (true)': This approach allows you to use conditions inside case statements, as switch normally does not support ranges or conditions directly.

// Q8: Write a switch statement that handles a variable trafficLight with values 'Red', 'Yellow', and 'Green'. Print a message for each traffic light color.
let trafficLight = "g";
switch (trafficLight) {
    case "r":
        console.log("Its Red STOP");
        break;
    case "y":
        console.log("Its Yello WAIT");
        break;
    case "g":
        console.log("Its Green GO");
        break;
    default:
        console.log("Not Available");
        break;
}

// Q9: Write a switch statement that evaluates a variable response with values 'Yes', 'No', and 'Maybe'. Print a message based on the response.
let decision = "Yes";
switch (decision) {
    case "Yes":
        console.log("You have decided");
        break;
    case "No":
        console.log("You have declined");
        break;
    case "Maybe":
        console.log("You are uncertain");
        break;
    default:
        console.log("Invalid Decision");
        break;
}

// Q10: Create a switch statement that takes a variable month and prints the number of days in the month (e.g., "January has 31 days").
let monthName = "July";
switch (monthName) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log("31 days");
        break;
    case "Feburary":
        console.log("28 days");
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log("30 days");
        break;
    default:
        console.log("Not Available");
        break;
}

// Q11: Write a switch statement to handle a variable status with values 'Pending', 'Approved', and 'Rejected'. Print a corresponding message for each status.
let currentStatus = "Approved";
switch (currentStatus) {
    case "Pending":
        console.log("Loan is in pending stage");
        break;
    case "Approved":
        console.log("Loan is approved");
        break;
    case "Rejected":
        console.log("Loan is rejected due to some issues");
        break;
}

// Q12: Write a switch statement that checks the value of a variable language and prints a greeting message in different languages (e.g., "Hello" for English, "Hola" for Spanish, "Bonjour" for French).
let languageGreet = "Hindi";
switch (languageGreet) {
    case "Hindi":
        document.write("Namashkar");
        break;
    case "English":
        console.log("Hello");
        break;
    case "Spanish":
        console.log("Hola");
        break;
    case "French":
        console.log("Bonjour");
        break;
    case "German":
        console.log("Guten Tag!");
        break;
    default:
        console.log("Namashkar");
        break;
}

// Q13: Create a switch statement that evaluates a variable score with values 'Excellent', 'Good', 'Average', and 'Poor'. Print a message for each score range.
let giveScore = 88;
switch (true) {
    case giveScore >= 0 && giveScore < 30:
        console.log("Poor");
        break;
    case giveScore >= 30 && giveScore < 60:
        console.log("Average");
        break;
    case giveScore >= 60 && giveScore < 90:
        console.log("Good");
        break;
    case giveScore >= 90 && giveScore <= 100:
        console.log("Excellent");
        break;
    default:
        console.log("Invaild score");
}

// Q14: Write a switch statement that checks a variable temperature and prints whether it is 'Cold', 'Warm', or 'Hot' based on the temperature value.
let temperatureValue = 33;
switch (true) {
    case temperatureValue > 0:
        console.log("Cold");
        break;
    case temperatureValue >= 20 && temperatureValue < 30:
        console.log("Warm");
        break;
    case temperatureValue >= 30:
        console.log("Hot");
        break;
    default:
        console.log("NA");
        break;
}

// Q15: Write a switch statement that evaluates a variable dayOfWeek with values 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', and 'Sunday'. Print whether it is a 'Weekday' or 'Weekend'.
let weekValue = "Friday";
switch (weekValue) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Weekday");
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
}

// Q16: Write a switch statement that takes a variable month (with values from 1 to 12) and prints out the corresponding month name (e.g., 1 = "January", 2 = "February"). Include a default case for invalid month numbers.
let month = 8;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log('Invalid month number. Please enter a number between 1 and 12.');
        break;
}

// Q17: Create a switch statement that evaluates a variable dayType with values 'Workday', 'Weekend', and 'Holiday'. Print whether it is a 'Busy Day' or 'Relax Day' based on the type.
let weekSchedule = "Friday";
switch (weekValue) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Busy working day.");
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("Relax Day, go to a beach.");
        break;
}

// Q18: Write a switch statement that handles a variable score with values 1 through 10 and prints a corresponding message based on the score range (e.g., "Poor", "Average", "Excellent"). Use ranges for better categorization.
let scoreRange = 6;
switch(scoreRange) {
    case 1:
    case 2:
    case 3:
        console.log("Poor");
        break;
    case 4:
    case 5:
    case 6:
    case 7:
        console.log("Average");
        break;
    case 8:
    case 9:
    case 10:
        console.log("Excellent");
        break;
    default:
        console.log("Not Available");
        break;
}

// Q19: Create a switch statement that evaluates a variable season with values 'Winter', 'Spring', 'Summer', and 'Fall'. Print the corresponding average temperature range for each season.
let tempRange = "Summer";
switch(tempRange) {
    case "Winter":
        console.log("Winter temperature range is 0 - 10 degree celcius");
        break;
    case "Spring":
        console.log("Spring temperature range is 10 - 20 degree celcius");
        break;
    case "Summer":
        console.log("Summer temperature range is 20 - 30 degree celcius");
        break;
    case "Fall":
        console.log("Fall temperature range is 10 - 20 degree celcius");
        break;
    default:
        console.log("Not available");
        break;
}

// Q20: Write a switch statement that takes a variable statusCode with values 200, 400, 404, and 500, and prints the corresponding HTTP status message (e.g., "OK", "Bad Request", "Not Found", "Internal Server Error").
let statusCode = 404;
switch(statusCode) {
    case 200:
        console.log("OK the task is performed successfuly");
        break;
    case 400:
        console.log("It was a Bad Request the request could not be understood");
        break;
    case 404:
        console.log("Not Found the request source could not be found");
        break;
    case 500:
        console.log("There is some Internal Server Error");
        break;
    default:
        console.log("No code match found");
        break;
}

// Q21: Write a switch statement that handles a variable userRole with values 'Admin', 'Editor', 'Viewer', and 'Guest'. Print the level of access for each role (e.g., "Full Access", "Edit Access", "Read Only", "Limited Access").
let userRole = "Editor";
switch(userRole) {
    case "Admin":
        console.log("Full Access");
        break;
    case "Editor":
        console.log("Edit Access");
        break;
    case "Viewer":
        console.log("Read Only");
        break;
    case "Guest":
        console.log("Limited Access");
        break;
}

// Q22: Create a switch statement that takes a variable number and prints the word "Even" or "Odd" based on whether the number is even or odd.
let eveORodd = 659;
switch(true) {
    case eveORodd%2===0:
        console.log("Even");
        break;
    case eveORodd%2!==0:
        console.log("Odd");
        break;
}

// Q23: Write a switch statement that evaluates a variable paymentMethod with values 'Credit Card', 'Debit Card', 'UPI', and 'Bank Transfer'. Print a corresponding message for each payment method.
let paymentMethod = "UPI";
switch(paymentMethod) {
    case "Credit Card":
        console.log("You choose Credit Card method");
        break;
    case "Debit Card":
        console.log("You choose Debit Card method to pay");
        break;
    case "UPI":
        console.log("You choose to pay through UPI method #DIGITAL INDIA");
        break;
    case "Bank Transfer":
        console.log("You choose to pay using the Bank Transfer method");
        break;
    default:
        console.log("Payment Method Not Available");
        break;
}

// Q24: Write a switch statement that evaluates a variable membershipLevel with values 'Basic', 'Silver', 'Gold', and 'Platinum'. Print the benefits associated with each membership level.
let membershipLevel = "Gold";
switch(membershipLevel) {
    case "Basic":
        console.log("Basic Membership: Access to standard content");
        break;
    case "Silver":
        console.log("Silver Membership: Access to standard content and premium content");
        break;
    case "Gold":
        console.log("Gold Membership: Access to all content, priority support");
        break;
    case "Platinum":
        console.log("Platinum Membership: All benefits of Gold, plus exclusive offers and personal concierge service");
        break;
    default:
        console.log("Invalid membership level. Please select a valid membership level");
        break;
}

// Q25: Write a switch statement that evaluates a variable productType with values 'Electronics', 'Clothing', 'Groceries', and 'Books'. Print the corresponding discount message for each product type (e.g., '10% off', '20% off', '5% off', '15% off').
let productType = "Groceries";
switch(productType) {
    case "Electronics":
        console.log("You will get a 10% discount on electronis items");
        break;
    case "Clothing":
        console.log("You will get a 20% discount on clothing items");
        break;
    case "Groceries":
        console.log("You will get a discount of 5% on groceries items");
        break;
    case "Books":
        console.log("You will get a 15% discount on books");
        break;
    default:
        console.log("No discount Available");
        break;
}
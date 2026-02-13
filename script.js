// 1️ მომხმარებლის მონაცემების შეყვანა და ვალიდაცია
// (prompt, String, Number, typeof, if, while)
// მომხმარებელს უნდა შეეკითხო:
// •	სახელი
// •	ასაკი
// მოთხოვნები:
// •	სახელი არ უნდა იყოს ცარიელი
// •	სახელი უნდა იყოს მინიმუმ 3 სიმბოლო
// •	ასაკი უნდა გადაიქცეს Number()-ით
// •	ასაკი უნდა იყოს რიცხვი (!isNaN)
// •	ასაკი უნდა იყოს 1–120 შორის
// •	გადაამოწმე მონაცემების ტიპები typeof-ით
// ❗ თუ რომელიმე პირობა არ სრულდება → ისევ ჰკითხე შესაბამისი მონაცემი (while)

// let name = prompt("Enter your name:");

// while (name === null || name.trim() === "" || name.trim().length < 3) {
//   alert("სახელი არ უნდა იყოს ცარიელი. სახელი უნდა იყოს მინიმუმ 3 სიმბოლო");
//   name = prompt("Enter your name again:");
// }

// name = name.trim();

// let age = Number(prompt("Enter your age:"));

// while (typeof age !== "number" || isNaN(age) || age < 1 || age > 120) {
//   alert("ასაკი უნდა იყოს 1–120 შორის");
//   age = Number(prompt("Enter your age again:"));
// }

// console.log("name:", name);
// console.log("age:", age);

//----------------------------------------------------------------

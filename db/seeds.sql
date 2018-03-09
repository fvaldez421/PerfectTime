USE users_db;

INSERT INTO members (name, age, height, weight, gender, conception)
VALUES 
("Sylvia", "32", "5'2", "128", "female", "yes");

INSERT INTO dailies (date, bbt, mood, energy, symptoms, cervMuc, intercourse, conceptMeth, meds, supplements, MemberId)
VALUES 
("Mar 1", 98.18, 3, 2, "Spotting", 
("Mar 2", 97.79, 4, 2, "Spotting",
("Mar 3", 98.2, 3, 3, "Nausea",
("Mar 4", 98.34, 5, 4, null,
("Mar 5", 97.43, 5, 7, null,
("Mar 6", 97.66, 6, 7, null,
("Mar 7", 97.39, 6, 8, null,
("Mar 8", 97.22, 5, 9, null,
("Mar 9", 97.69, 7, 7, null,
("Mar 10", 97.66, 8, 8, null,
("Mar 11", 97.76, 8, 10, null, 
("Mar 12", 97.67, 8, 9, "No Appetite",
("Mar 13", 97.79, 7, 8, null,
("Mar 14", 97.64, 8, 9, null,
("Mar 15", 97.79, 7, 7, null,
("Mar 16", 98.18, 8, 10, null,
("Mar 17", 98.47, 9, 8, null,
("Mar 18", 98.61, 10, 9, "Nausea",
("Mar 19", 98.59, 9, 9, null,
("Mar 20", 98.7, 8, 6, null,
("Mar 21", 98.60, 9, 5, null,
("Mar 22", 98.51, 9, 5, null,
("Mar 23", 98.51, 8, 4, null,
("Mar 24", 98.61, 7, 4, null,
("Mar 25", 98.92, 4, 3, null,
("Mar 26", 98.08, 5, 3, "Breast Tenderness",
("Mar 27", 98.33, 4, 3, "Breast Tenderness",
("Mar 28", 98.48, 3, 4, "Spotting",

INSERT INTO events (title, startDate, endDate, invitees, details, MemberId)
VALUES 
("Gyno Appt", "3/8/18", "3/9/18", "Kim, Daniel", "I might be pregnant, lets find out...", 1),
("Fert Alert", "3/10/18", "3/13/18", "na", "husband", "Increased chances of conception!", 1);



-- , "3/6/18 9:00pm", "3/6/18 9:19pm"





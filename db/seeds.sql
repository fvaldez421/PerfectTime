USE users_db;

INSERT INTO members (name, age, height, weight, gender, acl, sexact, conception)
VALUES 
("Jaimie", 32, "5'2", 128, "female", 29, "no", "natural");

INSERT INTO details (bbt, mood1, mood2, mood3, energy, meds, vits, flow, cervMuc, discharge, appetite, nausea, tender, cramping, menstart, MemberId)
VALUES 
(97.68, 4, 5, 6, 8, "Advil", "Calcium", "heavy", "green(LOL)", "yes", "low", "no", "na", "na", "2/20", 1),
(97.55, 6, 5, 4, 7, "Tylenol", "Iron", "normal", "blue(LOLOL)", "low", "high", "morning", "low", "no", "2/20", 1);


INSERT INTO events (title, dates, time, invitees, details, MemberId)
VALUES 
("Gyno Appt", "3/8/18", "2:00pm", "Kim, Daniel", "I might be pregnant, lets find out...", 1),
("Fert Alert", "3/10/18, 3/11/18, 3/12/18, 3/13/18", "na", "husband", "Increased chances of conception!", 1);



-- , "3/6/18 9:00pm", "3/6/18 9:19pm"
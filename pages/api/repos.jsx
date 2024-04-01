export default async (req, res) => {
    const data = [
      {
        id: 1,
        image: "/assets/techs/cci.png",
        name: "Intern (Software Developer)",
        location: "California Cybersecurity Institute",
        description: "• Revamped legacy code of previous discord bots into modern, maintainable, and robust code for future development." + "" +
        "• Fixed internal structure and UI/UX functionality which allowed users to understand the bot intuitively and drastically. Reducing the number of errors a user can make." + "\n" +
        "• Where the bot verified over 200+ students in the competition and handled over 100+ support ticket sent by the student" + "\n" +
        "• Utilized Microsoft Planner for effective communication on tasks assigned, presented progress in weekly meetings for" + "\n" +
        "constructive feedback, and incorporated sprints to stay on schedule." + "\n",

        point1: "• Revamped legacy code of previous discord bots into modern, maintainable, and robust code for future development.",
        point2: "• Fixed internal structure and UI/UX functionality which allowed users to understand the bot intuitively and drastically. Reducing the number of errors a user can make." + "\n",
        point3: "• Where the bot verified over 200+ students in the competition and handled over 100+ support ticket sent by the student" + "\n",
        point4: "• Utilized Microsoft Planner for effective communication on tasks assigned, presented progress in weekly meetings for constructive feedback, and incorporated sprints to stay on schedule." + "\n",
        link: "https://devpost.com/software/singify",
      }
    ];
    res.status(200).json(data);
  };
  
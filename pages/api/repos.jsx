export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "/assets/techs/cci.png",
      name: "Intern (Software Developer)",
      location: "California Cybersecurity Institute",
      description:
        "• Revamped legacy code of previous discord bots into modern, maintainable, and robust code for future development." +
        "" +
        "• Fixed internal structure and UI/UX functionality which allowed users to understand the bot intuitively and drastically. Reducing the number of errors a user can make." +
        "\n" +
        "• Where the bot verified over 200+ students in the competition and handled over 100+ support ticket sent by the student" +
        "\n" +
        "• Utilized Microsoft Planner for effective communication on tasks assigned, presented progress in weekly meetings for" +
        "\n" +
        "constructive feedback, and incorporated sprints to stay on schedule." +
        "\n",

      point1:
        "• Revamped legacy code of previous discord bots into modern, maintainable, and robust code for future development.",
      point2:
        "• Fixed internal structure and UI/UX functionality which allowed users to understand the bot intuitively and drastically. Reducing the number of errors a user can make." +
        "\n",
      point3:
        "• Where the bot verified over 200+ students in the competition and handled over 100+ support ticket sent by the student" +
        "\n",
      point4:
        "• Utilized Microsoft Planner for effective communication on tasks assigned, presented progress in weekly meetings for constructive feedback, and incorporated sprints to stay on schedule." +
        "\n",
      link: "https://devpost.com/software/singify",
    },

    {
      id: 2,
      image: "/assets/techs/h4I.png",
      name: "Software Developer",
      location: "Hack4Impact",
      description:
        "• Revamped legacy code of previous discord bots into modern, maintainable, and robust code for future development." +
        "" +
        "• Fixed internal structure and UI/UX functionality which allowed users to understand the bot intuitively and drastically. Reducing the number of errors a user can make." +
        "\n" +
        "• Where the bot verified over 200+ students in the competition and handled over 100+ support ticket sent by the student" +
        "\n" +
        "• Utilized Microsoft Planner for effective communication on tasks assigned, presented progress in weekly meetings for" +
        "\n" +
        "constructive feedback, and incorporated sprints to stay on schedule." +
        "\n",

      point1:
        "• Creating a Next.js Calendar Portal for a nonprofit organization that supports environmental and economic sustainability, and social justice." +
        "\n",
      point2:
        "• Such as developing the Calendar Page, and forgot password page and made to be responsive along with backend API endpoint for user data." +
        "\n",
      link: "https://devpost.com/software/singify",
    },

    {
      id: 2,
      image: "/assets/techs/poly.png",
      name: "Student Researcher",
      location: "Cal Poly",
      description:
        "• Revamped legacy code of previous discord bots into modern, maintainable, and robust code for future development." +
        "" +
        "• Fixed internal structure and UI/UX functionality which allowed users to understand the bot intuitively and drastically. Reducing the number of errors a user can make." +
        "\n" +
        "• Where the bot verified over 200+ students in the competition and handled over 100+ support ticket sent by the student" +
        "\n" +
        "• Utilized Microsoft Planner for effective communication on tasks assigned, presented progress in weekly meetings for" +
        "\n" +
        "constructive feedback, and incorporated sprints to stay on schedule." +
        "\n",

      point1:
        "• Utilizing Quanser Qcar to conduct autonomous vehicle controls via simulation" +
        "\n",
      point2:
        "• Primarily Working on computer vision and controls system for the car" +
        "\n",
      link: "https://devpost.com/software/singify",
    },
  ];
  res.status(200).json(data);
};

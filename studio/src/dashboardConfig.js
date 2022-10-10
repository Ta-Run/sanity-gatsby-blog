export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6343e12bead9df59684a5735",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ncjudhzg",
                  apiId: "af8125b0-c446-4a08-b7db-c86f15d1e4a1",
                },
                {
                  buildHookId: "6343e12bfc8657566616da30",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-oao9v26c",
                  apiId: "55548382-0cea-4704-b031-6adeb1f1ca8c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Ta-Run/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-oao9v26c.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

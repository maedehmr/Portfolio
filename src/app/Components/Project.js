export default function Project() {
    const portfolios = [
        {
          id: 1,
          src: "./img/todolist.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 2,
          src: "./img/todolist.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 3,
          src: "./img/todolist.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 4,
          src: "./img/todolist.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 5,
          src: "./img/todolist.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 6,
          src: "./img/todolist.png",
          repo: "https://github.com/maedehmr",
        },
      ];
      
    return(
        <section>
        <div
          name="experience"
          className="lg:h-screen h-full content-center grid experience"
        >
          <div className="text-center">
            <h2 className="text-4xl inline border-b-4 border-gray-300">
              پروژه های متن باز
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {portfolios.map(({ id, src, repo }) => (
              <div key={id}>
                <img className="rounded-t-lg" src={src} alt="projects" />
                <a
                  className="cursor-pointer"
                  onClick={() => window.open(repo, "_blank")}
                >
                  <p className="text-lg bg-pink-500 text-white rounded-b-lg py-3 text-center">
                    Github
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

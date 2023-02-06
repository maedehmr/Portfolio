export default function Project() {
    const portfolios = [
        {
          id: 1,
          src: "./img/web1.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 2,
          src: "./img/web2.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 3,
          src: "./img/web3.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 4,
          src: "./img/web4.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 5,
          src: "./img/web5.png",
          repo: "https://github.com/maedehmr",
        },
        {
          id: 6,
          src: "./img/web6.png",
          repo: "https://github.com/maedehmr",
        },
      ];
      
    return(
        <section>
        <div
          name="experience"
          className="lg:h-screen h-full content-center grid experience lg:pt-5 pt-28"
        >
          <div className="text-center">
            <h2 className="text-4xl inline border-b-4 border-gray-300 font-bold text-pink-900">
              پروژه های متن باز
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {portfolios.map(({ id, src, repo }) => (
              <div key={id}>
                <img className="rounded-t-lg h-48 w-full" src={src} alt="projects" />
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

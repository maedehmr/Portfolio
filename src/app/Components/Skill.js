export default function Skill() {
    const techs = [
        {
          id: 1,
          src: "./img/html.png",
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: "./img/css.png",
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: "./img/javascript.png",
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: "./img/react.png",
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: "./img/node.png",
          title: "NodeJs",
          style: "shadow-green-400",
        },
        {
          id: 6,
          src: "./img/nextjs.png",
          title: "Next JS",
          style: "shadow-white",
        },
        {
          id: 7,
          src: "./img/graphql.png",
          title: "GraphQL",
          style: "shadow-pink-400",
        },
        {
          id: 8,
          src: "./img/github.png",
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: "./img/tailwind.png",
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 10,
          src: "./img/express.png",
          title: "Express",
          style: "shadow-slate-400",
        },
        {
          id: 11,
          src: "./img/mongodb.png",
          title: "MongoDB",
          style: "shadow-green-500",
        },
        {
          id: 12,
          src: "./img/redux.png",
          title: "Redux",
          style: "shadow-purple-500",
        },
      ];
    return(
        <section>
        <div
          name="portfolio"
          className="lg:h-screen h-full content-center grid portfolio"
        >
          <div className="text-center">
            <h2 className="text-4xl inline border-b-4 border-gray-300 font-bold text-pink-900">
              مهارت های فنی
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mt-14">
            {techs.map(({ id, src, title, style }) => (
              <div key={id} className={`m-auto px-16 rounded-lg ${style}`}>
                <img src={src} alt="" width="90px" />
                <h4 className="text-center my-3 text-lg">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
    }
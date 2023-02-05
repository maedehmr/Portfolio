//function for form reset
function handleSubmit(e) {
    setTimeout(() => {
      e.target.reset();
    }, 3000);
  }
export default function Contact() {
    return(
<div
  name="contact"
  className="contact flex flex-col justify-center lg:h-screen h-full p-4"
>
  <div className="text-center mb-10">
    <h2 className="text-4xl inline border-b-4 border-gray-300">
      ارتباط با من
    </h2>
  </div>

  <div className=" flex justify-center items-center">
    <form
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
      className=" flex flex-col w-full md:w-1/2"
    >
      <input
        type="text"
        name="name"
        placeholder="نام خود را وارد کنید"
        required
        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="ایمیل خود را وارد کنید"
        required
        className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="پیام خود را وارد کنید"
        rows="10"
        required
        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
      ></textarea>

      <button
        type="submit"
        className="text-white bg-gradient-to-b from-pink-500 to-pink-600 px-6 mt-5 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
      >
        ارسال کنید
      </button>
    </form>
  </div>
</div>
    )
}

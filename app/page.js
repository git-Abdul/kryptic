import "./fonts.css"

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=0.9" />
      <link rel="icon" href="favicon.ico" />
      <link rel="stylesheet" href="style.css" />
      <title>Kryptic • Docs</title>
      {/* Home Page */}
      <a href="#top" id="Home" />
      <div className="text-center mt-40 heading">
        <h1 className="font-b drop-shadow-lg">Kryptic</h1>
      </div>
      <div className="flex justify-center items-center">
        <p className="font-b text-accent text-lg">Documentation</p>
      </div>
      <div className="flex justify-center items-center mt-30">
        <button
          className="font-b btn-primary hover:-translate-y-3"
          onclick="InviteFunction();"
        >
          Invite Me
        </button>
      </div>
      {/* About Section */}
      <section
        id="About"
        className="font-b section-heading text-center mt-30 drop-shadow-lg"
      >
        What is Kryptic?
      </section>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div className="md:w-1/3 md:ml-30 mt-20 mb-5 md:mt-0 md:mb-10 checkbox-padding">
          <input id="checkbox" name="checkbox" type="checkbox" />
          <label className="label" htmlFor="checkbox" />
        </div>
        <p
          className="Poppins text-white mb-10 mt-10 md:w-2/3 md:text-left md:ml-10"
          style={{ padding: 30 }}
        >
          Kryptic Bot is a versatile Discord bot designed to enhance your server's
          experience. With a range of features including moderation tools, fun
          commands, and utilities, Kryptic is here to make your server management
          easier and your community interactions more enjoyable. Kryptic is written
          within <code>Python</code> which makes it's backend safe and secure of any
          threats. <br />
          <br />
          <code>
            ℹ️ The code of the bot is situated in a github repository, that is
            updated and maintained by the owner `arim.`. Any changes to the bot will
            be welcomed while forking the original repository.
          </code>
        </p>
      </div>
      {/*Community Section*/}
      <section
        id="Community"
        className="font-b section-heading text-center mt-12 drop-shadow-lg"
      >
        Community
      </section>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src="community.png"
          alt="community"
          loading="lazy"
          className="community-img mr-30 ml-30"
        />
        <p
          className="Poppins text-white mb-10 mt-10 md:w-2/3 md:text-left md:ml-10"
          style={{ padding: 30 }}
        >
          Kryptic has a vast and diverse community ranging from many places, people
          and ideas. Kryptic is <code>open source</code> for anyone wishing to make
          quality of life improvements to the bot, which keeps the community growing
          and thinking to many levels. The code is allowed to be edited and
          customized to the server's or user's liking, Head on to the features
          section below! <br />
          <br />
          <code>
            ℹ️ Kryptic's server environment is publicly available on repl.it which
            can be accessed by any user and the user can experiment with Kryptic's
            server side components.
          </code>
        </p>
      </div>
      {/*Docs Section*/}
      <section
        id="Docs"
        className="font-b section-heading text-center mt-30 drop-shadow-lg"
      >
        Documentation
      </section>
      <div className="text-center mt-5 text-lg text-accent">
        <h1 className="font-b drop-shadow-lg">_______________</h1>
      </div>
      <section className="font-b section-heading text-center mt-30 drop-shadow-lg">
        Features
      </section>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src="code.png"
          alt="moderation"
          loading="lazy"
          className="community-img mr-20 ml-20"
        />
        <p
          className="font-b text-white mb-10 mt-10 md:w-2/3 md:text-left md:ml-10 text-lg"
          style={{ padding: 30 }}
        >
          <span className="text-4xl">Open Source</span> <br />
          <br />
          <code>
            Kryptic's distinction lies not only in its functionality but in its
            commitment to openness. The bot's code is open source, inviting the
            community to explore, contribute, and collaborate on its development.
            This transparency ensures that you have full visibility into the bot's
            operations and enhances the trust between the bot and its users. <br />
            <br /> Crafted by a verified Discord developer, Kryptic boasts a level
            of expertise that guarantees a seamless, secure, and premium experience
            for your server members. The '.' prefix becomes a symbol of excellence,
            representing a bot that adheres to Discord's rigorous standards and
            guidelines.
          </code>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src="version.png"
          alt="version"
          loading="lazy"
          className="community-img mr-20 ml-20"
        />
        <p
          className="font-b text-white mb-10 mt-10 md:w-2/3 md:text-left md:ml-10 text-lg"
          style={{ padding: 30 }}
        >
          <span className="text-4xl">Monthly Updates</span> <br />
          <br />
          <code>
            Kryptic is more than just a bot; it's a journey of discovery. Every
            month, anticipate a fresh array of surprises that transcend the
            ordinary. With each update, Kryptic introduces innovative commands,
            engaging games, and enhanced functionalities that redefine the way you
            and your members interact. <br />
            <br /> Experience the thrill of anticipation as each month dawns,
            bringing with it a wave of exciting possibilities. Whether it's new game
            modes, creative customization options, or improved user experiences,
            Kryptic's monthly updates ensure that your server remains at the
            forefront of entertainment.
          </code>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src="hammer.png"
          alt="moderation"
          loading="lazy"
          className="community-img mr-20 ml-20"
        />
        <p
          className="font-b
           text-white mb-10 mt-10 md:w-2/3 md:text-left md:ml-10 text-lg"
          style={{ padding: 30 }}
        >
          <span className="text-4xl">Moderation</span> <br />
          <br />
          <code>
            Kryptic is more than just a bot – it's an automated guardian that
            vigilantly scans every message for inappropriate content, spam, and
            other violations. Its advanced algorithms work behind the scenes to
            ensure a clean and respectful discourse among members, without the need
            for constant manual intervention. <br />
            <br /> Equipped with a suite of commands triggered by the '.', Kryptic
            empowers your moderation team like never before. From warnings and mutes
            to kicks and bans, these tools are designed to be intuitive, enabling
            swift and decisive actions to maintain order in your Discord server.
          </code>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src="ai.png"
          loading="lazy"
          alt="scraping"
          className="community-img mr-20 ml-20"
        />
        <p
          className="font-b text-white mb-10 mt-10 md:w-2/3 md:text-left md:ml-10 text-lg"
          style={{ padding: 30 }}
        >
          <span className="text-4xl">Web Scraping AI</span> <br />
          <br />
          <code>
            Kryptic goes beyond chat interactions. Thanks to its web scraping
            prowess, it can extract relevant information from websites and present
            it directly in the chat. From retrieving the latest news updates to
            fetching real-time data for specific topics, Kryptic turns information
            gathering into a breeze. <br />
            <br /> Imagine being able to receive up-to-the-minute updates on your
            favorite topics, all within the comfort of your Discord server. With
            Kryptic, you can do just that and more. Its AI-driven insights and web
            scraping capabilities combine to create a dynamic and engaging
            experience for all server members.
          </code>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src="lock.png"
          alt="lock"
          className="community-img mr-20 ml-20"
        />
        <p
          className="font-b text-white mb-10 mt-10 md:w-2/3 md:text-left md:ml-10 text-lg"
          style={{ padding: 30 }}
        >
          <span className="text-4xl">Security and Privacy</span> <br />
          <br />
          <code>
            Privacy is paramount, and Kryptic is designed with that in mind. All
            data and interactions are encrypted to safeguard sensitive information.
            Kryptic operates under a strict privacy policy, ensuring that user data
            is never shared or compromised. <br />
            <br /> With Kryptic, you have full control. Its customizable security
            settings allow you to tailor the bot's actions to align with your
            server's specific needs. From filtering out inappropriate content to
            setting access permissions, Kryptic empowers you to create a secure and
            harmonious environment.
          </code>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src="user.png"
          alt="user"
          className="community-img mr-20 ml-20"
        />
        <p
          className="font-b text-white mb-10 mt-10 md:w-2/3 md:text-left md:ml-10 text-lg"
          style={{ padding: 30 }}
        >
          <span className="text-4xl">Server Management</span> <br />
          <br />
          <code>
            Kryptic streamlines administrative tasks with its intuitive server
            management features. From creating and organizing channels to managing
            roles and permissions, Kryptic simplifies the complex processes that
            keep your server running smoothly. <br />
            <br /> Customization is at the core of Kryptic's server management.
            Tailor its responses, behaviors, and interactions to align with your
            server's unique culture and requirements. With Kryptic, you're not just
            managing a server; you're shaping an experience.
          </code>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src="dice.png"
          alt="dice"
          className="community-img mr-20 ml-20"
        />
        <p
          className="font-b text-white mb-10 mt-10 md:w-2/3 md:text-left md:ml-10 text-lg"
          style={{ padding: 30 }}
        >
          <span className="text-4xl">Fun Commands</span> <br />
          <br />
          <code>
            Rolling the dice and flipping a coin have never been more fun. With
            Kryptic, you can initiate a dice roll or coin flip with a simple
            command, adding an element of chance to your server interactions. Let
            your members try their luck and see what fate has in store! <br />
            <br /> Inject some personal charm into your server with the custom
            response generator. With Kryptic, you can create your own personalized
            commands that trigger unique responses. Whether it's an inside joke, a
            meme, or a heartwarming message, the custom response generator lets you
            infuse your server with your own brand of humor and personality.
          </code>
        </p>
      </div>
      {/*Footer Section*/}
      <footer className="font-b text-center mt-30 mb-10 py-4">
        <hr style={{ width: 300, margin: "auto" }} />
        <a href="#bottom">
          <p className="mb-5 text-white mt-5" onclick="LicenseLink();">
            © 2023 Kryptic Bot. All rights reserved.
          </p>
        </a>
        <hr style={{ width: 300, margin: "auto" }} />
      </footer>
      {/*Navbar Start*/}
      <header
        className="fixed bg-zing-800 shadow-md top-0 right-0 left-0 z-50 w-full px-5 py-2 flex justify-between items-center"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <a href="#" className="text-4xl font-bold font-b text-accent drop-shadow-lg">
            K
        </a>
        <div>
          <a href="#Community">
            <button
              to="/login"
              className="text-white font-b hover:bg-zinc-700 hover:ease-in-out duration-300 px-3 rounded py-1"
            >
              Community
            </button>
          </a>
          <a href="#Docs">
            <button
              to="/register"
              className="text-white font-b hover:bg-zinc-700 hover:ease-in-out duration-300 px-3 rounded py-1"
            >
              Docs
            </button>
          </a>
          <a href="#Code">
            <button
              to="/register"
              className="text-white font-b hover:bg-zinc-700 hover:ease-in-out duration-300 px-3 rounded py-1"
            >
              Code
            </button>
          </a>
        </div>
      </header>
    </>

  )
}

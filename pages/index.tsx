import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Better Than Yesterday: Dev — practical notes on building software, one improvement at a time.
          </h1>

          <p>
            I’m Anton, a software developer based in Sydney. I write about real-world development: building
            reliable features, learning from mistakes, and improving my craft day by day.
          </p>

          <p>
            Most posts focus on APIs and integration (web ↔ mobile), authentication flows, sessions, JWTs,
            and the patterns that make apps feel solid in production.
          </p>
        </div>

      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;

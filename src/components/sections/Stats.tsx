import Container from "../ui/Container";

const stats = [
  {
    number: "6+",
    title: "Years Experience",
  },
  {
    number: "50+",
    title: "Projects Delivered",
  },
  {
    number: "100%",
    title: "Client Commitment",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-14">
      <Container>
        <div className="grid grid-cols-2 gap-10 rounded-3xl border border-green-100 bg-white p-10 shadow-lg lg:grid-cols-4">

          {stats.map((item) => (
            <div key={item.title} className="text-center">

              <h2 className="text-4xl font-bold text-green-700">
                {item.number}
              </h2>

              <p className="mt-2 text-slate-600">
                {item.title}
              </p>

            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}
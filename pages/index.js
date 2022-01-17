export default function Home({ data }) {
  console.log('data in home:', data);
  return (
    <div>
      {data.map((note, i) => (
        <p key={i}>{note.title}</p>
      ))}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/notes`);
  let data = await res.json();
  //  data = JSON.stringify(data.rows);
  return { props: { data: data.rows } };
}

import Markdown from '@/components/Markdown/Markdown';
import DefaultLayout from '@/components/Layout/DefaultLayout';
function Home({ data }) {
  return (
    <>
      {data.map((note, i) => (
        <div key={i}>
          <p>{note.title}</p>
          <Markdown content={note.content}></Markdown>
        </div>
      ))}
    </>
  );
}

// page layout as props
Home.layout = DefaultLayout;
export default Home;
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/notes`);
  let data = await res.json();

  //  data = JSON.stringify(data.rows);
  return { props: { data: data.success ? data.rows : [] } };
}

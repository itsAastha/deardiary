import axios from 'axios';

export default function Home({ jsonData }) {
  return (
    <div>
      <h1>API Response</h1>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get('https://flask-production-b246.up.railway.app/user?email=user5@example.com&date=2023-07-02&name=Lava%20Kumar');
    const jsonData = response.data;

    return {
      props: {
        jsonData,
      },
    };
  } catch (error) {
    console.error('Error fetching JSON data:', error);
    return {
      props: {
        jsonData: null,
      },
    };
  }
}

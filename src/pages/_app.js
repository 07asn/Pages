import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component }) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

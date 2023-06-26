import Navbar from "./Navbar";

export default function DashBoard(props: { page: JSX.Element }) {
  return (
    <>
      <Navbar />
      {props.page}
    </>
  );
}

import KontakTeks from "./KontakTeks";
import Tombol from "./Tombol";

export default function Login() {
  return (
    <>
      <KontakTeks teks="Email"/>
      <KontakTeks teks="Password"/>
      <Tombol btn="Login"/>
    </>
  );
}

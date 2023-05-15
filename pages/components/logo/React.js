import Image from "next/image";

export default function Reactlogo(props) {
  return (
    <>
      <Image width={60} height={50} src="/react.png" alt="Logo du language" />
    </>
  );
}

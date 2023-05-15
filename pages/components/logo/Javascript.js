import Image from "next/image";

export default function Javascriptlogo(props) {
  return (
    <>
      <Image
        width={60}
        height={50}
        src="/javascript.png"
        alt="Logo du language"
      />
    </>
  );
}

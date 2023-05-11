/*import { jsPDF } from "jspdf";
import BasketPrevTimeline from "../basketprev/BasketPrevTimeline";
import { useRef } from "react";
import Button from "../../button/Button";

export default function PdfGenerator(props) {
  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  return (
    <>
      <Button href="#">
        Generer le PDF
        <span onClick={handleGeneratePdf} className="material-symbols-outlined">
          shopping_cart
        </span>{" "}
      </Button>
      <div ref={reportTemplateRef}>
        <BasketPrevTimeline />
      </div>
    </>
  );
}*/

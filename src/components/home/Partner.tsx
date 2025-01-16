import partnerCompanyLogo01 from "@/assets/partner/partner-1.png";
import partnerCompanyLogo02 from "@/assets/partner/partner-2.png";
import partnerCompanyLogo03 from "@/assets/partner/partner-3.png";
import partnerCompanyLogo05 from "@/assets/partner/partner-5.png";
import partnerCompanyLogo06 from "@/assets/partner/partner-6.png";
import partnerCompanyLogo07 from "@/assets/partner/partner-7.png";
import partnerCompanyLogo08 from "@/assets/partner/partner-8.png";
import Image from "next/image";

// Array of partner logos
const partnerLogos = [
  partnerCompanyLogo01,
  partnerCompanyLogo02,
  partnerCompanyLogo03,
  partnerCompanyLogo05,
  partnerCompanyLogo06,
  partnerCompanyLogo07,
  partnerCompanyLogo08,
];

const Partner: React.FC = () => {
  // Split the logos into rows with decreasing counts per row
  const rows = [];
  let imagesPerRow = 3;
  let startIndex = 0;

  while (startIndex < partnerLogos.length) {
    rows.push(partnerLogos.slice(startIndex, startIndex + imagesPerRow));
    startIndex += imagesPerRow;
    imagesPerRow -= 1; // Decrease the number of images per row
  }

  return (
    <div className="space-y-6">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-16">
          {row.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="w-24 h-auto"
              height={500}
              width={500}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Partner;

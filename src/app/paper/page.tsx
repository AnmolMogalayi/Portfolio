import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import paperPage01 from "@/assets/Paper/6ac50806-01.png";
import paperPage02 from "@/assets/Paper/6ac50806-02.png";
import paperPage03 from "@/assets/Paper/6ac50806-03.png";
import paperPage04 from "@/assets/Paper/6ac50806-04.png";
import paperPage05 from "@/assets/Paper/6ac50806-05.png";
import paperPage06 from "@/assets/Paper/6ac50806-06.png";
import paperPage07 from "@/assets/Paper/6ac50806-07.png";
import paperPage08 from "@/assets/Paper/6ac50806-08.png";
import paperPage09 from "@/assets/Paper/6ac50806-09.png";
import paperPage10 from "@/assets/Paper/6ac50806-10.png";
import paperPage11 from "@/assets/Paper/6ac50806-11.png";
import paperPage12 from "@/assets/Paper/6ac50806-12.png";

const paperPages = [
  paperPage01,
  paperPage02,
  paperPage03,
  paperPage04,
  paperPage05,
  paperPage06,
  paperPage07,
  paperPage08,
  paperPage09,
  paperPage10,
  paperPage11,
  paperPage12,
];

export default function PaperPage() {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Publications"
          title="Research Paper"
          description="Explore my research paper and Academic Contributions."
        />
        <div className="mt-12">
          <Card className="p-6 md:p-10 overflow-visible">
            <div className="mx-auto w-full max-w-3xl space-y-8">
              {paperPages.map((page, index) => (
                <Image
                  key={page.src}
                  src={page}
                  alt={`Research paper page ${index + 1}`}
                  priority={index === 0}
                  className="h-auto w-full rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

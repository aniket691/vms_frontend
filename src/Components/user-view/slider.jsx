import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
    {
      name: "महसूल विभाग",
      body: "वय राष्ट्रीयत्व आणि अधिवास प्रमाणपत्र",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "ग्रामविकास व पंचायत राज विभाग",
      body: "जन्म नोंद दाखला",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "कामगार विभाग",
      body: "कंत्राटी कामगार अनुज्ञप्ती नुतनीकरण",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "जलसंपदा विभाग",
      body: "पाणी वापर संस्थेस पाणीपट्टी थकबाकी दाखला देणे",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "नोंदणी व मुद्रांक विभाग",
      body: "विशेष कुलमुखत्यारपत्राचे अधिप्रमाणन करून देणे.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "शिक्षण विभाग",
      body: "प्रमाणपत्रे व शैक्षणिक दस्तऐवज पडताळणी",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "आरोग्य विभाग",
      body: "आरोग्य तपासणी प्रमाणपत्र",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "पोलीस विभाग",
      body: "पोलीस पडताळणी अहवाल",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "नगर विकास विभाग",
      body: "महापालिका क्षेत्र विकास योजना नोंदणी",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "कृषी विभाग",
      body: "शेतकरी कर्जमाफी प्रमाणपत्र",
      img: "https://avatar.vercel.sh/john",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-28 w-60 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] ",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[550px] w-full flex-row items-center justify-center overflow-hidden rounded-lg ">
      <Marquee pauseOnHover vertical className="[--duration:20s] ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}

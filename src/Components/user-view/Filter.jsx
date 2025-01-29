import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HeartIcon, Star } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const documents = [
  {
    id: 6,
    title: "मिळकतीचे प्रमाणपत्र",
    category: "महसूल विभाग",
    date: "2024-01-10",
    description: "मिळकतीच्या प्रमाणपत्राची नवीन नियमावली.",
    link: "https://themes.stackbros.in/eduport_r/assets/08-DgNLqCM_.jpg",
    reviews: 4.4,
  },
  {
    id: 7,
    title: "जातीचा प्रमाणपत्र",
    category: "महसूल विभाग",
    date: "2024-01-11",
    description: "जाती प्रमाणपत्राची प्रक्रिया आणि अटी.",
    link: "https://res.cloudinary.com/de6iaxz48/image/upload/v1738146071/Kpawar/bvl59jz8o20o02q76pxv.jpg",
    reviews: 4.3,
  },
  {
    id: 8,
    title: "नॉन क्रिमिलियर प्रमाणपत्र",
    category: "पोलिस विभाग",
    date: "2024-01-12",
    description: "नॉन क्रिमिलियर प्रमाणपत्र प्राप्त करण्याची प्रक्रिया.",
    link: "https://res.cloudinary.com/de6iaxz48/image/upload/v1738146070/Kpawar/gb1afukrybsyhdvskwkr.jpg",
    reviews: 4.2,
  },
  {
    id: 9,
    title: "वय राष्ट्रीयत्व आणि अधिवास प्रमाणपत्र",
    category: "महसूल विभाग",
    date: "2024-01-13",
    description: "वय, राष्ट्रीयत्व आणि अधिवास प्रमाणपत्राची अटी.",
    link: "https://res.cloudinary.com/de6iaxz48/image/upload/v1738146069/Kpawar/vqrxktku0l7lc2pgfkue.jpg",
    reviews: 4.6,
  },
  {
    id: 11,
    title: "तात्पुरता रहिवास प्रमाणपत्र",
    category: "गृह विभाग",
    date: "2024-01-14",
    description: "तात्पुरता रहिवास प्रमाणपत्राच्या नियमांची माहिती.",
    link: "https://themes.stackbros.in/eduport_r/assets/08-DgNLqCM_.jpg",
    reviews: 4.5,
  },
  {
    id: 13,
    title: "केंद्र सरकार जातीचे प्रमाणपत्र",
    category: "महसूल विभाग",
    date: "2024-01-16",
    description: "केंद्र सरकारच्या जाती प्रमाणपत्राची प्रक्रिया.",
    link: "https://res.cloudinary.com/de6iaxz48/image/upload/v1738169840/Picsart_25-01-29_17-32-32-560_ali8nb.jpg",
    reviews: 4.7,
  },
  {
    id: 14,
    title: "इ. डब्ल्यू. एस. प्रमाणपत्र",
    category: "महसूल विभाग",
    date: "2024-01-17",
    description: "इ. डब्ल्यू. एस. प्रमाणपत्र प्राप्त करण्याची माहिती.",
    link: "https://themes.stackbros.in/eduport_r/assets/08-DgNLqCM_.jpg",
    reviews: 4.8,
  },
  {
    id: 16,
    title: "आयकर प्रमाणपत्र",
    category: "महसूल विभाग",
    date: "2024-01-18",
    description: "आयकर प्रमाणपत्र प्राप्त करण्याची प्रक्रिया.",
    link: "https://res.cloudinary.com/de6iaxz48/image/upload/v1738146068/Kpawar/iqgwyqxbc3b2wd2duspu.jpg",
    reviews: 4.6,
  },
  {
    "id": 17,
    "title": "३३% महिला आरक्षण दस्तऐवज",
    "category": "महिला आणि बाल विकास विभाग",
    "date": "2024-01-18",
    "description": "३३% महिला आरक्षण धोरणाविषयी संपूर्ण माहिती व प्रक्रियेचा दस्तऐवज.",
    "link": "https://res.cloudinary.com/de6iaxz48/image/upload/v1738169809/Picsart_25-01-29_17-36-51-918_lmyoov.jpg",
    "reviews": 4.8
}

  
];

const Filter = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">सर्वोत्तम लोकप्रिय सेवा</h2>
        <p className="text-gray-600 mt-2">
          आपल्या दस्तऐवजांच्या सर्व सेवांसाठी आमच्याकडे या!
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} // Mobile: 1 Slide
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation
       
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="px-4"
      >
        {documents.map((document) => (
          <SwiperSlide key={document.id}>
            <Card className="bg-white shadow-lg rounded-xl flex flex-col h-full">
              {/* Image */}
              <CardHeader className="p-0">
                <img
                  src={document.link}
                  alt={document.title}
                  className="w-full h-96 object-cover rounded-t-xl"
                />
              </CardHeader>

              {/* Content */}
              <CardContent className="flex-grow flex flex-col p-4">
                <div className="flex justify-between mb-2">
                  <Badge variant="outline">{document.category}</Badge>
                  <HeartIcon
                    className="text-red-500 cursor-pointer"
                    size={20}
                  />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {document.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {document.description}
                </p>
              </CardContent>

              {/* Footer */}
              <CardFooter className="flex justify-center p-4 mt-auto">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-amber-600 text-white hover:text-black hover:border hover:border-black transition-all duration-300"
                >
                  Proceed
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Filter;

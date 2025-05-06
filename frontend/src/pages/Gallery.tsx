// GalleryPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const eventData = {
  "2022": [
    {
      eventName: "New Year Celebration",
      eventImage: "https://picsum.photos/800/600?random=1",
      images: [
        "https://picsum.photos/800/600?random=2",
        "https://picsum.photos/800/600?random=3",
        "https://picsum.photos/800/600?random=4",
      ],
    },
    {
      eventName: "Spring Carnival",
      eventImage: "https://picsum.photos/800/600?random=5",
      images: [
        "https://picsum.photos/800/600?random=6",
        "https://picsum.photos/800/600?random=7",
      ],
    },
    {
      eventName: "Winter Gala",
      eventImage: "https://picsum.photos/800/600?random=8",
      images: [
        "https://picsum.photos/800/600?random=9",
        "https://picsum.photos/800/600?random=10",
        "https://picsum.photos/800/600?random=11",
        "https://picsum.photos/800/600?random=12",
      ],
    },
  ],
  "2023": [
    {
      eventName: "Tech Expo",
      eventImage: "https://picsum.photos/800/600?random=13",
      images: [
        "https://picsum.photos/800/600?random=14",
        "https://picsum.photos/800/600?random=15",
      ],
    },
    {
      eventName: "Music Festival",
      eventImage: "https://picsum.photos/800/600?random=16",
      images: [
        "https://picsum.photos/800/600?random=17",
        "https://picsum.photos/800/600?random=18",
        "https://picsum.photos/800/600?random=19",
      ],
    },
    {
      eventName: "Art Exhibition",
      eventImage: "https://picsum.photos/800/600?random=20",
      images: ["https://picsum.photos/800/600?random=21"],
    },
    {
      eventName: "Charity Run",
      eventImage: "https://picsum.photos/800/600?random=22",
      images: [
        "https://picsum.photos/800/600?random=23",
        "https://picsum.photos/800/600?random=24",
      ],
    },
  ],
  "2024": [
    {
      eventName: "Science Fair",
      eventImage: "https://picsum.photos/800/600?random=25",
      images: [
        "https://picsum.photos/800/600?random=26",
        "https://picsum.photos/800/600?random=27",
        "https://picsum.photos/800/600?random=28",
      ],
    },
    {
      eventName: "Food Fest",
      eventImage: "https://picsum.photos/800/600?random=29",
      images: ["https://picsum.photos/800/600?random=30"],
    },
    {
      eventName: "Cultural Night",
      eventImage: "https://picsum.photos/800/600?random=31",
      images: [
        "https://picsum.photos/800/600?random=32",
        "https://picsum.photos/800/600?random=33",
        "https://picsum.photos/800/600?random=34",
      ],
    },
    {
      eventName: "Book Fair",
      eventImage: "https://picsum.photos/800/600?random=35",
      images: [
        "https://picsum.photos/800/600?random=36",
        "https://picsum.photos/800/600?random=37",
      ],
    },
    {
      eventName: "Summer Camp",
      eventImage: "https://picsum.photos/800/600?random=38",
      images: [
        "https://picsum.photos/800/600?random=39",
        "https://picsum.photos/800/600?random=40",
        "https://picsum.photos/800/600?random=41",
        "https://picsum.photos/800/600?random=42",
      ],
    },
  ],
};

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="bg-[#1A202C] text-white p-4 pt-20">
        {Object.entries(eventData).map(([year, events]) => (
          <div key={year} className="py-4">
            <h2 className="text-2xl">{year}</h2>
            <div className="flex flex-wrap gap-4">
              {events.map((event, idx) => (
                <div
                  key={event.eventName + idx}
                  onClick={() =>
                    navigate(
                      `/event/${year}/${encodeURIComponent(event.eventName)}`,
                      { state: { event, year } }
                    )
                  }
                  className="cursor-pointer"
                >
                  <img
                    src={event.eventImage}
                    alt={event.eventName}
                    className="w-64 h-40 object-cover"
                  />
                  <div className="text-lg">{event.eventName}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

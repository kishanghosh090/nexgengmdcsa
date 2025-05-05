import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom'; // Assuming React Router is used

interface PhotoItem {
  id: string;
  label: string;
  imageUrl: string;
  alt: string;
  year: number;
  description?: string;
}

const photos: PhotoItem[] = [
  {
    id: '1',
    label: 'VR',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
    alt: 'Photo by Minh Pham',
    description: 'Virtual reality setup in modern office'
  },
  {
    id: '2',
    label: 'Tech',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a',
    alt: 'Photo by Magicle',
    description: 'Latest technology gadgets collection'
  },
  // Add more photos...
];

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = Array.from(new Set(photos.map(photo => photo.year))).sort((a, b) => b - a);

  const groupPhotosByYear = (year: number) => 
    photos.filter(photo => photo.year === year).slice(0, 4);

  return (
    <div className="bg-gray-800 min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-white lg:text-3xl">Gallery</h2>
          </div>
        </div>

        {years.map(year => (
          <div key={year} className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{year}</h3>
              <Link 
                to={`/gallery/${year}`}
                className="inline-block rounded-lg border bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-100 hover:text-gray-800"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {groupPhotosByYear(year).map(photo => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src={photo.imageUrl}
                    loading="lazy"
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {photo.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
              <img 
                src={selectedPhoto.imageUrl} 
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain"
              />
              <div className="p-4 bg-gray-800 text-white">
                <h3 className="text-xl font-bold mb-2">{selectedPhoto.label}</h3>
                <p>{selectedPhoto.description}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

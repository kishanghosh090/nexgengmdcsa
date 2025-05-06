import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

// Type for the event data
type EventType = {
  eventName: string;
  eventImage: string;
  images: string[];
};

interface LocationState {
  event: EventType;
  year: string;
}

const EventPhotosPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | undefined;

  // If navigated directly, state may be undefined
  if (!state || !state.event) {
    return (
      <div style={{ padding: "2rem" }}>
        <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
          ← Back to Gallery
        </button>
        <h2>Event not found</h2>
      </div>
    );
  }

  const { event, year } = state;

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const handleClickImage = (img: string) => {
    setSelectedImage(img);
  };

  

  const handleCloseModal = () => {
    setSelectedImage(undefined);
  };

  return (
    <div className="max-w-screen max-h-screen overflow-clip">
      <div style={{ padding: "2rem", backgroundColor: "#1A202C" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#2D3748",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ← Back to Gallery
        </button>
        <h1 style={{ marginBottom: "1rem", color: "#fff" }}>
          {event.eventName} <span style={{ color: "#888" }}>({year})</span>
        </h1>
        <img
          src={event.eventImage}
          alt={event.eventName}
          width={400}
          height={240}
          style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
            objectFit: "cover",
            width: "100%",
            maxWidth: "400px",
            height: "auto",
          }}
        />
        <h2 style={{ marginBottom: "1rem", color: "#fff" }}>Gallery Photos</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            position: "relative",
          }}
        >
          {event.images.map((img, idx) => (
            <img
              key={img + idx}
              src={img}
              alt={`${event.eventName} ${idx + 1}`}
              width={200}
              height={120}
              style={{
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => handleClickImage(img)}
            />
          ))}
          {selectedImage && (
            <div
              className="modal-container"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50vw",
                height: "50vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(2px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
              }}
              
            >
              <button
                className="absolute top-0 right-0"
                style={{
                  margin: "0.1rem",
                  padding: "0.3rem 0.5rem",
                  borderRadius: "12px",
                  backgroundColor: "#2D3748",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={handleCloseModal}
              >
                close
              </button>
              <img
                src={selectedImage}
                alt={event.eventName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventPhotosPage;


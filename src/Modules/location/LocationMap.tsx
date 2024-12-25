const LocationMap = () => {
  return (
    <>
      <div className="text-center my-4">
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            width: "100%",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d766.9718899669973!2d31.171149420139294!3d29.99502531725737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847e1148ed377%3A0x8465870277088f7f!2z2KjYsdisINiv2LHYqSDYp9mE2YHYttmEINmi!5e0!3m2!1sar!2seg!4v1734854845505!5m2!1sar!2seg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default LocationMap;

export function MapComponent() {
  return (
    <div className="h-full min-h-[400px] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7379481120042!2d27.114709500000004!3d-22.5514872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb0d3242552683b%3A0xb3209d4e42d36806!2sXaloo%20Technologies!5e0!3m2!1sen!2sbw!4v1757250303453!5m2!1sen!2sbw"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      {/* Light Mode Video */}
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qg_ZEo_Kz3g?si=8avQpebTooiWzRmy"
        thumbnailSrc="https://imgs.search.brave.com/dAMvPgOG74JgemKpIzvKw-36Y75uhNcAfw8zA82w6KM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzgzLzk5LzA4/LzM2MF9GXzk4Mzk5/MDg0OV94MWZMWHN0/RXlRVkc1TUpvcUo2/aE5xcjc4RWV6dXZH/cS5qcGc"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

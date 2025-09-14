import AnimatedSection from "@components/AnimatedSection/AnimatedSection";

export default function YouTubePlaylist({
  title = "Learn With Our YouTube Playlist",
  subtitle = "Watch the full course for free on YouTube.",
  listId = "PL9WbyKqkuCAYT-IPvo5PxR_hijMuR1RCB",
}) {
  const src = `https://www.youtube-nocookie.com/embed/videoseries?list=${listId}`;

  return (
    <AnimatedSection className="section mb-20">
      <div className="mb-4">
        <span className="text-sm font-medium text-sub-para">YouTube</span>
        <h2 className="h2 mt-1 text-3xl lg:text-4xl">{title}</h2>
        <p className="text-sub-para text-sm lg:text-base">{subtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-light-gray shadow-card overflow-hidden">
        <div className="relative w-full pt-[56.25%]">{/* 16:9 */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src={src}
            title="YouTube playlist player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

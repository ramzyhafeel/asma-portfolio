import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import heroVideoSrc from "../assets/hero-video.mp4";
import heroPosterSrc from "../assets/fathima-cartoon-poster.png";

export default function Hero() {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const wasAudibleBeforeScrollRef = useRef(true);

  const [isAudible, setIsAudible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);

  // Smooth scroll helper
  const handleScrollTo = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Run video with sound on mount: default is unmuted autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1.0;
    video.loop = true;
    video.muted = false;

    // Immediately play unmuted with sound
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsAudible(true);
          setIsPlaying(true);
          wasAudibleBeforeScrollRef.current = true;
        })
        .catch((err) => {
          console.warn("Browser autoplay policy prevented audio before gesture:", err);
          // Fallback if browser blocks unmuted play before first interaction:
          video.muted = true;
          video.play().catch(() => {});

          const startAudioOnGesture = () => {
            if (videoRef.current) {
              videoRef.current.muted = false;
              videoRef.current.volume = 1.0;
              videoRef.current
                .play()
                .then(() => {
                  setIsAudible(true);
                  setIsPlaying(true);
                  wasAudibleBeforeScrollRef.current = true;
                })
                .catch(() => {});
            }
            cleanup();
          };

          const cleanup = () => {
            window.removeEventListener("click", startAudioOnGesture);
            window.removeEventListener("touchstart", startAudioOnGesture);
            window.removeEventListener("keydown", startAudioOnGesture);
            window.removeEventListener("pointerdown", startAudioOnGesture);
          };

          window.addEventListener("click", startAudioOnGesture, { once: true, passive: true });
          window.addEventListener("touchstart", startAudioOnGesture, { once: true, passive: true });
          window.addEventListener("keydown", startAudioOnGesture, { once: true, passive: true });
          window.addEventListener("pointerdown", startAudioOnGesture, { once: true, passive: true });
        });
    }
  }, []);

  // Keep DOM video muted state synchronized with isAudible
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isAudible;
    if (isAudible) {
      video.volume = 1.0;
    }
  }, [isAudible]);

  // Mute audio when user scrolls well past hero section, restore if they scroll back
  useEffect(() => {
    const handleScroll = () => {
      const isPastHero = window.scrollY > window.innerHeight * 0.75;
      const isAtHero = window.scrollY < window.innerHeight * 0.3;

      if (isPastHero) {
        if (videoRef.current && !videoRef.current.muted) {
          wasAudibleBeforeScrollRef.current = true;
          videoRef.current.muted = true;
          setIsAudible(false);
        }
      } else if (isAtHero && wasAudibleBeforeScrollRef.current) {
        if (videoRef.current) {
          videoRef.current.muted = false;
          videoRef.current.volume = 1.0;
          setIsAudible(true);
        }
      }
    };

    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        if (!video.muted) {
          wasAudibleBeforeScrollRef.current = true;
          video.muted = true;
          setIsAudible(false);
        }
      } else if (wasAudibleBeforeScrollRef.current) {
        video.muted = false;
        video.volume = 1.0;
        setIsAudible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Toggle Audio (Mute / Unmute)
  const handleToggleAudio = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isAudible) {
      video.muted = true;
      setIsAudible(false);
      wasAudibleBeforeScrollRef.current = false;
    } else {
      video.muted = false;
      video.volume = 1.0;
      if (video.paused) {
        video.play().catch(() => {});
      }
      setIsAudible(true);
      wasAudibleBeforeScrollRef.current = true;
    }
  };

  // Replay from beginning with sound
  const handleReplay = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = false;
    video.volume = 1.0;
    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsAudible(true);
        wasAudibleBeforeScrollRef.current = true;
      })
      .catch(() => {});
  };

  // Play / Pause video toggle
  const handleTogglePlay = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F8F5F0]"
    >
      {/* ================= 1. FULL-SCREEN BACKGROUND VIDEO (WITH EMBEDDED SOUND) ================= */}
      <div
        onClick={() => {
          if (!isAudible) {
            handleToggleAudio();
          }
        }}
        className={`absolute inset-0 z-0 h-full w-full overflow-hidden select-none ${
          !isAudible ? "cursor-pointer" : ""
        }`}
        title={!isAudible ? "Click anywhere to turn on video sound" : undefined}
      >
        {videoError ? (
          <img
            src={heroPosterSrc}
            alt="Fathima Asma cartoon character in beige hijab"
            className="h-full w-full object-cover object-[78%_18%] lg:object-[82%_18%]"
          />
        ) : (
          <video
            ref={videoRef}
            src={heroVideoSrc}
            poster={heroPosterSrc}
            playsInline
            autoPlay
            loop
            muted={!isAudible}
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover object-[78%_18%] lg:object-[82%_18%]"
          />
        )}

        {/* Subtle soft gradient wash on the left to guarantee 100% text contrast while preserving video background */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F8F5F0]/85 via-[#F8F5F0]/35 to-transparent sm:from-[#F8F5F0]/70 sm:via-[#F8F5F0]/15 lg:w-[55%]"
          aria-hidden="true"
        />
        {/* Soft bottom vignette to ground controls */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8F5F0]/30 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Top spacing to account for fixed/sticky navbar without covering character */}
      <div className="pt-24 sm:pt-28 lg:pt-32" />

      {/* ================= 2. MAIN INTRODUCTION CONTENT (OVERLAY ON LEFT) ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14 py-8 sm:py-12 my-auto pointer-events-auto">
        <motion.div
          className="max-w-xl lg:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Small Eyebrow Label with Decorative Line */}
          <div className="mb-4 sm:mb-6 flex items-center gap-3 text-xs sm:text-[13px] font-semibold tracking-[0.22em] text-[#9E8472] uppercase select-none">
            <span className="h-[1.5px] w-7 bg-[#9E8472]" />
            <span>WELCOME TO MY PORTFOLIO</span>
          </div>

          {/* Primary Heading: Hi, I'm Fathima Asma. */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[92px] font-bold leading-[1.03] tracking-tight">
            <span className="block text-[#302824]">Hi, I&apos;m</span>
            <span className="block text-[#9E8472]">Fathima Asma.</span>
          </h1>

          {/* Secondary Heading: HNDIT Undergraduate & Executive Professional */}
          <h2 className="mt-4 sm:mt-5 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#302824] leading-[1.18]">
            HNDIT Undergraduate
            <span className="block text-[#9E8472]">&amp; Executive Professional</span>
          </h2>

          {/* Description Paragraph */}
          <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-[#302824]/85">
            Motivated and detail-oriented undergraduate student pursuing HNDIT at SLIATE, with a strong background in English communication, organization, and teamwork. Completed a Diploma in English at University of Peradeniya. Actively seeking to contribute to Royal Travels as a Female Executive in a remote role.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* Primary Button */}
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="inline-flex items-center gap-2 rounded-full bg-[#302824] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1E1916] hover:scale-[1.02] active:scale-95"
            >
              <span>Explore My Background</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-[#302824] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#302824] transition-all hover:bg-[#302824]/5 hover:scale-[1.02] active:scale-95"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Availability Indicator */}
          <div className="mt-6 sm:mt-7 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#302824]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            <span>Open to Remote &amp; Executive Opportunities</span>
          </div>
        </motion.div>
      </div>

      {/* ================= 3. BOTTOM BAR (SCROLL INDICATOR & AUDIO/VIDEO CONTROLS) ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14 pb-8 sm:pb-10 pointer-events-auto">
        <div className="flex items-end justify-between gap-4">
          {/* Bottom-Left: Scroll to explore */}
          <div className="flex items-center gap-3 text-xs text-[#302824]/75 font-medium select-none">
            <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[#302824]/40 p-1">
              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-[#302824]"
              />
            </div>
            <span>Scroll to explore</span>
            <span className="hidden sm:inline-block h-px w-12 bg-[#302824]/20" />
          </div>

          {/* Bottom-Right: Video Sound, Replay & Playback Controls */}
          <div className="flex items-center gap-2">
            {/* Pill Button: Sound Toggle */}
            <button
              type="button"
              onClick={handleToggleAudio}
              className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-semibold shadow-lg transition-all active:scale-95 ${
                isAudible
                  ? "bg-[#302824] text-white hover:bg-[#1E1916] hover:scale-[1.02]"
                  : "bg-[#302824] text-white ring-2 ring-[#9E8472]/40 hover:bg-[#1E1916] hover:scale-[1.02]"
              }`}
              aria-label={isAudible ? "Mute Video Sound" : "Run Video with Sound"}
            >
              {isAudible ? (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <Volume2 className="h-4 w-4 text-emerald-400" />
                  <span>Sound ON · Click to Mute</span>
                </>
              ) : (
                <>
                  <VolumeX className="h-4 w-4 text-white/80" />
                  <span>Muted · Click to Unmute</span>
                </>
              )}
            </button>

            {/* Replay Button: Restarts video from beginning with sound */}
            <button
              type="button"
              onClick={handleReplay}
              title="Restart Video from Beginning"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#302824] text-white shadow-lg transition-all hover:bg-[#1E1916] hover:scale-105 active:scale-95"
              aria-label="Restart video from beginning"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            {/* Play / Pause Button */}
            <button
              type="button"
              onClick={handleTogglePlay}
              title={isPlaying ? "Pause Video" : "Play Video"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#302824] text-white shadow-lg transition-all hover:bg-[#1E1916] hover:scale-105 active:scale-95"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-white text-white" />
              ) : (
                <Play className="h-4 w-4 fill-white text-white translate-x-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import gsap from "gsap";
export default function protectAnimation() {
  gsap.from(".protect-animation", {
    autoAlpha: 0,
    duration: 1,
    delay: 1,
  });
}

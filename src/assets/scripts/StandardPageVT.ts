import gsap from "gsap";
export default function standarPageEntry() {
  gsap.from(".standard-page", {
    autoAlpha: 0,
    duration: 1,
    delay: 1,
  });
}

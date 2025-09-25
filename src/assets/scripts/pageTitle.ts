import gsap from "gsap";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);
let titleOpacity: gsap.core.Tween;
let heroSplit: SplitText;
export default function titleAnimation() {
  titleOpacity = gsap.from(".page-title-text", {
    autoAlpha: 0,
    delay: 1,
  });
  heroSplit = SplitText.create(".page-title-text", {
    type: "chars words",
    mask: "chars",
    charsClass: "title-chars",
    wordsClass: "title-words",
    autoSplit: true,
    onSplit: (self) => {
      gsap.from(self.chars, {
        y: 150,
        opacity: 1,
        delay: 1,
        stagger: {
          amount: 0.5,
        },
      });
    },
  });
}

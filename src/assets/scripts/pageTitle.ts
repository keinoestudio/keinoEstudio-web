import gsap from "gsap";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default function titleAnimation() {
  gsap.from(".page-title-text", {
    autoAlpha: 0,
    delay: 1,
  });
  let heroSplit = SplitText.create(".page-title-text", {
    type: "chars",
    mask: "chars",
    charsClass: "title-chars",
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

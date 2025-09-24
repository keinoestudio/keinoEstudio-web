import gsap from "gsap";
import { swapFunctions } from "astro:transitions/client";
export default function transitionFunction() {
  function mySwap(doc: Document) {
    swapFunctions.deselectScripts(doc);
    swapFunctions.swapRootAttributes(doc);
    swapFunctions.swapHeadElements(doc);
    const restoreFocusFunction = swapFunctions.saveFocus();
    swapFunctions.swapBodyElement(doc.body, document.body);
    restoreFocusFunction();
  }

  document.addEventListener("astro:before-swap", (event: any) => {
    const realSwap = () => {
      mySwap(event.newDocument);
      document.dispatchEvent(new Event("astro:page-load"));
    };
    const transitionExit = gsap.timeline({
      paused: true,
      onComplete: () => {
        realSwap();
        transitionEntry
          .fromTo(
            ".tr-keino",
            {
              y: 0,
            },
            { y: 220, ease: "power4.inOut", duration: 1 },
            "<"
          )
          .fromTo(
            ".tr-estudio",
            {
              y: 0,
            },
            { y: -220, ease: "power4.inOut", duration: 1 },
            "<"
          )
          .from(
            ".transition-background--background-column.column-1",
            {
              transformOrigin: "top",
              scaleY: 1,
              duration: 1,
              ease: "power4.inOut",
            },
            "<.2"
          )
          .from(
            ".transition-background--background-column.column-2",
            {
              transformOrigin: "bottom",
              scaleY: 1,
              duration: 1,
              ease: "power4.inOut",
            },
            "<"
          );
      },
    });
    const transitionEntry = gsap.timeline();

    transitionExit
      .to(".transition-background--background-column.column-1", {
        transformOrigin: "bottom",
        scaleY: 1,
        duration: 1,
        ease: "power4.inOut",
      })
      .to(
        ".transition-background--background-column.column-2",
        {
          transformOrigin: "top",
          scaleY: 1,
          duration: 1,
          ease: "power4.inOut",
        },
        "<"
      )
      .fromTo(
        ".tr-keino",
        {
          y: -220,
        },
        {
          y: 0,
          ease: "power4.inOut",
          duration: 1,
        },
        "<.2"
      )
      .fromTo(
        ".tr-estudio",
        {
          y: 220,
        },
        {
          y: 0,
          ease: "power4.inOut",
          duration: 1,
        },
        "<"
      );

    event.swap = () => {
      transitionExit.play();
    };
  });
}

import gsap from "gsap";
export default function menuTrigger(): void {
  let menuActive = false;
  const menuOpen = gsap.timeline({ delay: 0.5, paused: true });
  menuOpen
    .to(".desktop-menu", {
      display: "block",
    })
    .to(
      ".menu-block__right .menu-button",
      { className: "menu-button menu-opened" },
      0.6
    )

    .from(
      ".desktop-menu-background--column:first-child",
      {
        transformOrigin: "bottom",
        scaleY: 0,
        ease: "power4.inOut",
        duration: 1.8,
      },
      0
    )
    .from(
      ".desktop-menu-background--column:last-child",
      {
        transformOrigin: "top",
        scaleY: 0,
        ease: "power4.inOut",
        duration: 1.8,
      },
      0
    )
    .to(
      ".menu-block__left .menu-button",
      { className: "menu-button menu-opened" },
      1.2
    )
    .from(
      ".main-nav--list-element a",
      {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      },
      "<"
    )
    .to(
      ".link-text",
      {
        opacity: 1,
      },
      "<0.6"
    )
    .to(
      ".menu-cross",
      {
        opacity: 1,
        rotateZ: "90deg",
      },
      1.2
    )
    .to(
      ".menu-menu",
      {
        opacity: 0,
      },
      1
    );
  // gsap.from(".main-menu--list-element a", { y: -120 });
  const menuTrigger = document.querySelector("#menu-trigger");
  const header = document.querySelector("#site-header");
  menuTrigger?.addEventListener("click", () => {
    if (!menuActive) {
      menuOpen.play();
      menuActive = true;
    } else {
      menuOpen.reverse();
      menuActive = false;
    }
  });
}

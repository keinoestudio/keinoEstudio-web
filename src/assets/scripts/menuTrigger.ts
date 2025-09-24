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
      0.3
    )

    .from(
      ".desktop-menu-background--column:first-child",
      {
        transformOrigin: "bottom",
        scaleY: 0,
        ease: "power4.inOut",
        duration: 1,
      },
      0
    )
    .from(
      ".desktop-menu-background--column:last-child",
      {
        transformOrigin: "top",
        scaleY: 0,
        ease: "power4.inOut",
        duration: 1,
      },
      0
    )
    .to(
      ".menu-block__left .menu-button",
      { className: "menu-button menu-opened" },
      0.6
    )
    .from(
      ".main-nav--list-element a",
      {
        y: 120,
        opacity: 0,
        duration: 0.4,
        ease: "power4.out",
        stagger: 0.1,
      },
      0.6
    )
    .from(
      ".social-media-menu--item",
      {
        y: 120,
        opacity: 0,
        duration: 0.4,
        ease: "power4.out",
        stagger: 0.1,
      },
      0.6
    )
    .from(
      ".social-media-menu--item p:last-child",
      {
        opacity: 0,
        duration: 0,
      },
      1.2
    )
    .to(
      ".link-text",
      {
        opacity: 1,
      },
      1.2
    )
    .to(
      ".menu-cross",
      {
        opacity: 1,
        rotateZ: "90deg",
      },
      0.6
    )
    .to(
      ".menu-menu",
      {
        opacity: 0,
      },
      0.6
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

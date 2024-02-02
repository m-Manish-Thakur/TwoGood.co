let tl = gsap.timeline();

tl.from("#header img, #header #nav a, #header #right h2, #header #right button", {
  y: -80,
  duration: 0.2,
  delay: 0.2,
  opacity: 0,
  stagger: 0.2,
});

tl.from("h1", {
  y: 50,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});

tl.from("h3", {
  y: 20,
  opacity: 0,
  duration: 0.3,
});

tl.from("#rightImg, #leftImg", {
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.to("h3", {
  y: 20,
  repeat: -1,
  duration: 0.7,
  yoyo: true,
});

tl.from("#social i", {
  y: 20,
  duration: 0.2,
  opacity: 0,
});

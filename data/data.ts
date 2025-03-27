const currentYear = new Date().getFullYear();
const data = {
  sitename: "ModAura",
  sitetagline: "✨ Something great is on the way! ✨",
  siteurl: "",
  sitelogo: "",
  title: "Coming Soon!",
  newsletterheading: "Stay tuned for our live updates!",
  copyrightText: `Copyright © ${currentYear}`,
  socialIconsHeading: "Follow Us 📣",
  hideSubscribeForm: false, // make true to disable subscription form
  socialIcons: [
    {
      icon: "/icons8-instagram.svg",
      title: "Instagram",
      link: "https://www.instagram.com/_modaura.in",
    },
  ],
  hide: {
    subscribeForm: false, // make true to disable subscription form
    header: false,
    content: false,
    footer: false,
  },
};

export default data;

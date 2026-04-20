/** Contact, booking, and shared media URLs — update in one place. */
export const site = {
  email: "info@pumatics.com",
  phoneDisplay: "(650) 209-0336",
  /** E.164 for `tel:` links */
  phoneTel: "+16502090336",
  bookingUrl: "https://app.acuityscheduling.com/schedule.php?owner=21389694",
  discoveryCallUrl:
    "https://app.acuityscheduling.com/schedule.php?owner=21389694&appointmentType=category:Discovery%20Meeting",
  images: {
    logoNav: "https://i.imgur.com/ICLXFWI.png",
    logoFooter: "https://i.imgur.com/CKfPClv.png",
    homeHero: "https://i.imgur.com/EXje6lM.jpeg",
    homeWelcome: "https://i.imgur.com/yHsEEhy.jpeg",
    tutorBoris: "https://i.imgur.com/fZwlRPC.jpeg",
    tutorEmily: "https://i.imgur.com/edPrjqD.jpeg",
    tutorGeorge: "https://i.imgur.com/t4V38GL.jpeg",
    tutorJerry: "https://i.imgur.com/hVIQY5T.jpeg",
    tutorVicky: "https://i.imgur.com/1b119i6.jpeg",
  },
} as const

export const mailtoHref = `mailto:${site.email}`
export const telHref = `tel:${site.phoneTel}`

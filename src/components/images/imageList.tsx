function createCaption(title: string, date: string, description: string) {
  return `<div> <div class="lightbox-caption-title-date"> <div class="lightbox-caption-title"> ${title} </div><div class="lightbox-caption-date"> ${date} </div> </div> <div class="lightbox-caption-description"> ${description}</div>  </div>`;
}

const imageList = [
  {
    id: 'AMWts8COqYpDshFIoEO7EUEwZcEFGMDnPhJpg0IkcDDJYOdX722mxp0Ko9zHjpyO9jRRsYaJSdMU9dav3AM3xRVwLE1j5lvmQ2h1dK7OL8horxreqIvXSqaqj0HsjbTcY6yqCr7W6ep5koqLAiPMopLGmvI',
    width: 6016,
    height: 4000,
    caption: createCaption(
      'Me hiding',
      'Feb 5, 2016',
      'This photo may look artistic until you know the truth that it was taken at a chicken coop. See the white mark near the bottom left of the photo? That is chicken poop 💩',
    ),
  },
  {
    id: 'AMWts8Cxu6g4VBAspWay3gMOhivKVMt0kWsA8bDR9waq1v24d80ej031owQZuhce3D_ZpgU_sdWPYZbrsTWSflKcwcht4FGB8W3dVElq8yLD7kKxAAYLoPFlBZ6D7PuobumS2Uey9wx5pNUI4mo8myULIYI',
    width: 4001,
    height: 6018,
    caption: createCaption(
      'Into the wood',
      'Jul 6, 2016',
      'This is a portrait of my teacher in a forest of earleaf acacia trees. It is one of the photos which I feel so proud of.',
    ),
  },
  {
    id: 'AMWts8BqTbstFhzBsopeT7xiyGWiQaoPFjsVKIkmNm18GwFnqKPxUeKdcWAQplOcytjsjhmTuYbU4B150AN5G24tNbA8TwwXk4_M3Kd-66h4qbSVH80Wkw139vJ3zXcoGo_bTzj1HMNQ5jLuxb1ddIYkNZA',
    width: 3647,
    height: 2547,
    caption: createCaption(
      'Sunset',
      'Jan 1, 2015',
      'I took this photo while strolling along the street. The black objects are the metal frames of a transmission tower ⚡',
    ),
  },
  {
    id: 'AMWts8DKs507QnJGiMRiEZ5Pis1HeK27V72Z81QCIQ97PdJgJoA4COmB_1NL-xzp2j2RuMP-NyzyL5w86HGbywcJD26mjE9IrD_D1tFeuApFsAysCds5M-ZpO1roe8qvLFrUbDPc8oREcevLYN61JvNOXf4',
    width: 6016,
    height: 4000,
    caption: createCaption(
      'Ha Noi dusk',
      'Sep 2, 2021',
      'This is the view from my apartment when I relocated to Ha Noi to become a trainee at VinBigData.',
    ),
  },
  {
    id: 'AMWts8CfCPRUY9RWr2o3RkBeHoffUOsUDK9oWsze3aZVvo-v3IOp53AabdZa4a5Z8oU25h50JkCrS5ByaT16VyPYl02-JqYVVOjuKNW_tsJIFdXKhjSN8Bw3Kmtgp_TQssrC-GxjkibB6JK-HyGsnsMRlLU',
    width: 6016,
    height: 4000,
    caption: createCaption(
      'Eggs',
      'Jan 19, 2016',
      'This is just one of my random ideas with the eggs from the fridge and the basket from my desk.',
    ),
  },
  {
    id: 'AMWts8CBJ3Q9guajOqVU_M9HXWSh7Hqr5h0LnN2RO52vpKLQy0jfb-QykhKHMNdhSXVqk7v7tDORgPgjsOMTcmlrCY5Pci8XIfTUpDxy0cpjZurLXUC1Ye7pRRpZ6bp60G2h07G2cVK8osPYJHGbQ8j0mxc',
    width: 1417,
    height: 1889,
    caption: createCaption(
      'Unknown flowers',
      'Nov 5, 2014',
      "Until now, I still don't know the name of these flowers 🤔",
    ),
  },
  {
    id: 'AMWts8CNgnQI6vMX_GDO6YOAnWV-W700mB4kfdczrnr0Mj09UffAwiXKvFpkGMnu2saCmRH-cItu2ITydFepYHLDELO83JtmPYfL1sU69ZEVn9-UYfcxR4y_zB1cFaHf5XoHUeDEZen88XrD2TjeG1-XMw0',
    width: 3404,
    height: 1260,
    caption: createCaption(
      'AMO 2017 Facebook cover',
      'May 7, 2017',
      'AMO 2017 UIT is a contest for students majoring in Integrated Circuit Design. Therefore, the corners and edges of each letter in the logo were inspired by the pins and wires on Printed Circuit Boards.',
    ),
  },
  {
    id: 'AMWts8DlvgIFHvBb5K4-QBbvB-1bBGArqk2Fyq-8Xxc7zGUP39ZYjMDr-rghxZUmPPuUob2qVfBgcj2d_mGcuhxSEjGWnkygNSvhZQl8fsGweFh_IpVS0SIX7fsQizqSBcpxaUrP4F4Qqi_zkAH3TSHrAX8',
    width: 3231,
    height: 4411,
    caption: createCaption(
      '<a href="https://henibeauty.com" target="_blank">HeNi Beauty Salon</a>\'s nail design',
      'Nov 20, 2022',
      'I wanted to try something different to decorate the shoot, other than glass balls or bling jewelry. So, I grabbed the cabbage from the fridge and the purple-red curtain. And voilà!',
    ),
  },
  {
    id: 'AMWts8D2WrblT0QWdQfhEyP0QblBGV-gqTI88Z_Sgb4g3Zr9gCRz5L2rNvibx00CwAW0GfEGrnMpTeab06qnHLXXbJF-wbw027yrp-tKl6hGP61L8J3dwa4TSKYoRbjIWyg5kkU3SXus3orRq_ldgnXs82Q',
    width: 1400,
    height: 704,
    caption: createCaption(
      'UX Design word cloud',
      'Dec 2, 2022',
      'This is the word cloud I created for <a href="https://uxdocs.vercel.app/ux-terms" target="_blank">a UX glossary</a>. I used <a href="https://wordart.com/" target="_blank">wordart.com</a> to create the foreground while the <a href="https://unsplash.com/photos/zA7I5BtFbvw" target="_blank">background</a> is a beautiful artwork by Annie Spratt.',
    ),
  },
  {
    id: 'AMWts8DyznCXJOX-L9hddGwzY4ZIMGFS3dlKwXFeYDq_GYO6ZQ1NTKyXnHOV88xxGGmqBl9EmFtEzJQbYprPJpui2-GoNMM9F2t8FifhUDRzYBWg7G3oV4jd25wRKEa8rKGrgBk2G-y9-1kvDLRIo6MxLvc',
    width: 3984,
    height: 2592,
    caption: createCaption(
      'Pink daisies',
      'Jan 6, 2017',
      'These are crepe paper daisies before they were put in vases. They were made to raise money for the charity of the annual Spring Volunteer campaign at my college.',
    ),
  },
  {
    id: 'AMWts8BysR17FwsM03INIHRwmJFG4WRcCyGjNzEtGLlvcWQsbIUSLSWWei3s89xmr8_AdG8AVDqKWGC3H-ilRSulirj3vQB7Unq0eL3R-q7xMBib8X8mL8mdZI0WY7GmorgtMG6eB_gy01eeW0zQQ1o-uFw',
    width: 3674,
    height: 5526,
    caption: createCaption(
      'PuriTea cleanser',
      'Sep 2, 2021',
      'PuriTea facial cleanser from the cosmetics brand <a href="https://minimalbeauty.vn/" target="_blank">/li:st/</a>',
    ),
  },
];

export default imageList;

// HOW TO GET THESE IDs FOR YOUR IMAGES?
// 1. Upload all of your images to an album on Google Photos.
// 2. Share the album.
// 3. In the shared album, open each image and right-click on them to get their URLs.
// 4. From the URL that you just got, remove the base URL part, which looks like https://lh3.googleusercontent.com/pw/
// 5. Then remove the parameters at the end of the URL, which look like =w1234 and =h123.

const galleryImages = [
  {
    id: 'AIL4fc9rxMkdBX4USQxhhz2pmUbBaIwx6J-P6UhxcpSxhCRhRxb7GvahcyET7c9H1gw-BLoA23odPdQlf1yf4BVZErmBoNngdDgqocHmP1CMGjS7ZGVq_C8_rMLnCS6AttpqD8Z-CE3be5t4OXzAS-xCyCI',
    width: 6016,
    height: 4000,
    caption: {
      title: 'Me hiding',
      date: 'Feb 5, 2016',
      description:
        'This photo may look artistic until you know the truth that it was taken at a chicken coop. See the white mark near the bottom left of the photo? That is chicken poop 💩',
    },
  },
  {
    id: 'AIL4fc-yQ-dCOedWG_6K2WtKFogSrQutZ-oAeD_PipHWN6ZPvFEHt8C6v2T6m4yS2OV7wyak44svzkfDX0BwmfXI_SRWpyuYw4_4lUKOmAjsSpY5bxHN-c4jxnXB-X8Xm5G3tPmdfNbaXQuKcPMkHqVclBo',
    width: 4001,
    height: 6018,
    caption: {
      title: 'In the woods',
      date: 'Jul 6, 2016',
      description:
        'This is a portrait of my teacher in a forest of earleaf acacia trees. It is one of the photos which I feel so proud of.',
    },
  },
  {
    id: 'AIL4fc97L-oik55eZhe8FefUYiDsKF0tNCB48VE9RSKSwr9xnle97bP11EK0pk5StXalAvIHNOH8BzH5G8TcwxRJGn3j0rRV5bqz54fgj1G--4clX8lkB-aRCZsRObyDhRX-jE6niri18nYqYPAE3BQQuTw',
    width: 3647,
    height: 2547,
    caption: {
      title: 'Sunset',
      date: 'Jan 1, 2015',
      description:
        'I took this photo while strolling along the street. The black objects are the metal frames of a transmission tower ⚡',
    },
  },
  {
    id: 'AIL4fc9TijiDcffnoLJbUk2TvdVIRaw-sZmn1z2GTEUGBH4_Ut4aIGroUhLUf9mJiTD5_h4OzWm5AB0IOurtjlY5J6IUfMh_uM1MFK1M9B54Tgs4YXTvOv1VdEz6qCvVTrWXxAOyvZLxb7wS9Q14vR1Os2A',
    width: 6016,
    height: 4000,
    caption: {
      title: 'Ha Noi dusk',
      date: 'Sep 2, 2021',
      description:
        'This is the view from my apartment when I relocated to Ha Noi to become a trainee at VinBigData.',
    },
  },
  {
    id: 'AIL4fc_wfmInZBrRBazj2ZnvbUwl1YseuJ56MmncNdkCuMFOsk_ZkbtiWZg0RaE20sXj_iwYrZQSaWq2WMvSf-BhwBDPqiEdgblJf7DSAk4R28Skmr3NlPpFMjD6vPxX9ZPKQQ_Mq5YNBOdoQbfPUXkc6hM',
    width: 6016,
    height: 4000,
    caption: {
      title: 'Eggs',
      date: 'Jan 19, 2016',
      description:
        'This is just one of my random ideas with the eggs from the fridge and the basket from my desk.',
    },
  },
  {
    id: 'AIL4fc_xDlruriHj3SwtoNaNOqXYjb9x1gqCULDev-iGavjxsBJ1ozuYHawu78BBExkcZMqvUn-tKMNRF_PjmTZNVg8eOIqrypMp06JTUZs8kxewB3uQV7GoMx7pdUbHqPD52-H0o58U--wwFvO5wPFF860',
    width: 1417,
    height: 1889,
    caption: {
      title: 'Unknown flowers',
      date: 'Nov 5, 2014',
      description: "Until now, I still don't know the name of these flowers 🤔",
    },
  },
  {
    id: 'AIL4fc_rajnVAkEW2twYzxODTu8z_g0hLq5xmgG4vjPdm_pmAvV5zgprX7Oz4hcOa2h5KuQVy824_v2SFu7t-Z3MAKzDPmP6sEuN3tFZ4YDA3nOzKdvxb9NT5y0QRfuTgv-bAP1odWukoAjQVTDBOurIioU',
    width: 3404,
    height: 1260,
    caption: {
      title: 'AMO 2017 Facebook cover',
      date: 'May 7, 2017',
      description:
        'AMO 2017 UIT is a contest for students majoring in Integrated Circuit Design. Therefore, the corners and edges of each letter in the logo were inspired by the pins and wires on Printed Circuit Boards.',
    },
  },
  {
    id: 'AIL4fc8dG6ESKsuzgnYLTAaN5T6PQVi1s3PePgaL0DXNnaFlJ8zzmrdsh54-ZeRNGhdSNlrNs0bZ8_ohwJ2jjRex5k1ZKZKuEum6xSm01CqZNBtkk1iPWfsE5uTgCnjwOfONzY9Yj196j6xD78l94MyCrsI',
    width: 3231,
    height: 4411,
    caption: {
      title:
        '<a href="https://henibeauty.com" target="_blank">HeNi Beauty Salon</a>',
      date: 'Nov 20, 2022',
      description:
        'I wanted to try something different to decorate the shoot, other than glass balls or bling jewelry. So, I grabbed the cabbage from the fridge and the purple-red curtain. And voilà!',
    },
  },
  {
    id: 'AIL4fc-kUsYTWBvZAgEOe9TpltNeQrGWXeq8Ff3ds1zPAVa-t5hQuNJSe3qbLUZFQu9-nPDYPaRKuSrycD9gLABYrMD55e831CT-mhSKTKr63E7xHcG0JMJPrlcnwHgUCfFwhfAP0uJ24HgDcTVH2SQXLY0',
    width: 1400,
    height: 704,
    caption: {
      title: 'UX Design word cloud',
      date: 'Dec 2, 2022',
      description:
        'This is the word cloud I created for <a href="https://uxdocs.vercel.app/ux-terms" target="_blank">a UX glossary</a>. I used <a href="https://wordart.com/" target="_blank">wordart.com</a> to create the foreground while the <a href="https://unsplash.com/photos/zA7I5BtFbvw" target="_blank">background</a> is a beautiful artwork by Annie Spratt.',
    },
  },
  {
    id: 'AIL4fc8IKrLoEHiwuQGCDRBuWltQOp6lEBDxcptuWmCzZgZ8fspvmts_cWycSGL11sk3QpHQbYHg4S_qWbkniZiAY013Wf6bMuUhHgmPEZwrY43JDDGBYXtPt5PXwWtY1UGPtUN7mfDQd-oE3IwMcx5hjes',
    width: 3984,
    height: 2592,
    caption: {
      title: 'Pink daisies',
      date: 'Jan 6, 2017',
      description:
        'These are crepe paper daisies before they were put in vases. They were made to raise money for the charity of the annual Spring Volunteer campaign at my college.',
    },
  },
  {
    id: 'AIL4fc9keRrgazISGYDNfvkaU-urCofE4qxQPIgKS-N878rJwIIai2iKVMFCLMsRUwEu5QjBQPeAjbkZvCdhar5kgYRnTiGhaSkmOuwlKAeD86l62b-U2UtjsGZrDufVsBJko9qbMXX5gmASSpvOfbMgzHU',
    width: 3674,
    height: 5526,
    caption: {
      title: 'PuriTea cleanser',
      date: 'Sep 2, 2021',
      description:
        'PuriTea facial cleanser from the cosmetics brand <a href="https://minimalbeauty.vn/" target="_blank">/li:st/</a>',
    },
  },
];

export default galleryImages;

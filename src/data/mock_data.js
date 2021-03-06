const createAccount = (id, image, fullname, birth, password, active, work_area) => {
  return { id, image, fullname, birth, password, active, work_area };
};

export const accounts = [
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    false,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
];

export const user_detail = {
  id: "user1234",
  role: "admin",
  active: false,
  password: "a1c3s5e3ds",
  image: "https://secure.gravatar.com/avatar/?s=120&d=mp",
  fullname: "Nguyen Van A",
  birth: new Date(),
  email: "nguyenvana@gmail.com",
  phone: "0987654321",
  work_area: [
    { title: "Qu???n Ba ????nh", code: "01D001", city: "Th??nh ph??? H?? N???i" },
    { title: "Qu???n T??y H???", code: "01D003", city: "Th??nh ph??? H?? N???i" },
    { title: "Th??nh ph??? H?? Giang", code: "02D024", city: "T???nh H?? Giang" },
    { title: "Huy???n ?????ng V??n", code: "02D026", city: "T???nh H?? Giang" },
    { title: "Th??nh ph??? Cao B???ng", code: "04D040", city: "T???nh Cao B???ng" },
    { title: "Huy???n B???o L??m", code: "04D042", city: "T???nh Cao B???ng" },
  ],
};

export const business_detail = {
  business_id: "20123456",
  brandname: "ABC Food - C??ng ty TNHH Th???c ph???m s???ch ABC",
  types: [{ title: "S???n xu???t" }, { title: "D???ch v???" }],
  isImage: true, // image la base64
  image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
  address_code: "",
  address: "Th??n Nghi Kh??c, X?? An B??nh, Huy???n Thu???n Th??nh, T???nh B???c Ninh, Vi???t Nam",
  ward: "Ph?????ng T??y M???",
  district: "Qu???n Nam T??? Li??m",
  city: "Th??nh ph??? H?? N???i",
  owner: {
    name: "Nguyen Van A",
    birth: "19/02/2000",
    cmnd: "123456789",
  },
  phone: "0987654321",
  isNewCertificate: true,
  certificate: {
    certificate_id: "2022 462312", // tao cert id
    status: "C??n h???n",
    time: {
      start: "20/02/2020",
      end: "26/02/2020",
    },
    last_update: "20/02/2020",
  },
  foods: [
    {
      image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
      name: "C??m rang",
      status: "?????t an to??n v??? sinh",
    },
    {
      image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
      name: "B??n",
      status: "?????t an to??n v??? sinh",
    },
  ],
  last_check: "20/02/2020",
};

export const business = [
  {
    business_id: "20123456",
    brandname: "C??ng ty th???c ddddddddddd dddddddd dddddddddd ddd",
    types: [{ title: "S???n xu???t" }, { title: "D???ch v???" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "???????ng 70 ???????ng 70 ???????ng 70 ???????ng 70 ???????ng 70 ???????ng 70 ???????ng 70 ???????ng 70 ???????ng 70 ???????ng 70 ",
    ward: "Ph?????ng T??y M???",
    district: "Qu???n Nam T??? Li??m",
    city: "Th??nh ph??? H?? N???i",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "C??n h???n",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
    },
    last_update: "20/02/2020",
  },
  {
    business_id: "20123456",
    brandname: "B??n 11",
    types: [{ title: "S???n xu???t" }, { title: "D???ch v???" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "???????ng 70",
    ward: "Ph?????ng T??y M???",
    district: "Qu???n Nam T??? Li??m",
    city: "Th??nh ph??? H?? N???i",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "C??n h???n",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
      last_update: "20/02/2020",
    },
    foods: [
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "C??m rang",
        status: "?????t an to??n v??? sinh",
      },
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "B??n",
        status: "?????t an to??n v??? sinh",
      },
    ],
    last_update: "20/02/2020",
  },
  {
    business_id: "20123456",
    brandname: "B??n 11",
    types: [{ title: "S???n xu???t" }, { title: "D???ch v???" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "???????ng 70",
    ward: "Ph?????ng T??y M???",
    district: "Qu???n Nam T??? Li??m",
    city: "Th??nh ph??? H?? N???i",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "H???t h???n",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
    },
    foods: [
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "C??m rang",
        status: "?????t an to??n v??? sinh",
      },
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "B??n",
        status: "?????t an to??n v??? sinh",
      },
    ],
    last_update: "20/02/2020",
  },
  {
    business_id: "20123456",
    brandname: "B??n 11",
    types: [{ title: "S???n xu???t" }, { title: "D???ch v???" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "???????ng 70",
    ward: "Ph?????ng T??y M???",
    district: "Qu???n Nam T??? Li??m",
    city: "Th??nh ph??? H?? N???i",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "Ch??a c???p",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
    },
    foods: [
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "C??m rang",
        status: "?????t an to??n v??? sinh",
      },
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "B??n",
        status: "?????t an to??n v??? sinh",
      },
    ],
    last_update: "20/02/2020",
  },
  {
    business_id: "20123456",
    brandname: "B??n 11",
    types: [{ title: "S???n xu???t" }, { title: "D???ch v???" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "???????ng 70",
    ward: "Ph?????ng T??y M???",
    district: "Qu???n Nam T??? Li??m",
    city: "Th??nh ph??? H?? N???i",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "B??? thu h???i",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
    },
    foods: [
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "C??m rang",
        status: "?????t an to??n v??? sinh",
      },
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "B??n",
        status: "?????t an to??n v??? sinh",
      },
    ],
    last_update: "20/02/2020",
  },
];

export const plans = [
  {
    business: {
      business_id: "20123456",
      city: "Th??nh ph??? H?? N???i",
      district: "Qu???n Nam T??? Li??m",
    },

    schedule: {
      start: "20/02/2020",
      end: "26/02/2020",
    },
    result_comment:
      "C?? s??? v???t c dfd fdf dddddddd fdf dfd  dfd  df dfh???t ch?? dsdddddfdf df df d fdff df ??f fdf dff dfd fdfd dfa t???t",
    result: "?????t",
    status: "no",
    penalty: "N/A",
    samples: [
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "M???u ?????t an to??n",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "M???u ?????t an to??n",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
    ],
  },
  {
    business: {
      business_id: "20123456",
      city: "Th??nh ph??? H?? N???i",
      district: "Qu???n Nam T??? Li??m",
    },
    schedule: {
      start: "20/02/2020",
      end: "26/02/2020",
    },
    status: "done",
    result_comment: "C?? s??? v???t ch???t ch??a t???t",
    result: "Ch??a ?????t",
    penalty: "N/A",
    samples: [
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "M???u ?????t an to??n",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "M???u ?????t an to??n",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
    ],
  },
  {
    business_id: "20123456",
    schedule: {
      start: "20/02/2020",
      end: "26/02/2020",
    },
    status: "done",
    result_comment: "C?? s??? v???t ch???t ch??a t???t",
    result: "Ch??a c??",
    penalty: "N/A",
    samples: [
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "M???u ?????t an to??n",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "M???u ?????t an to??n",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
    ],
  },
];

export const plan_detail = {
  business: {
    business_id: "20123456",
    brandname: "ddd",
    city: "Th??nh ph??? H?? N???i",
    district: "Qu???n Nam T??? Li??m",
    address: "S??? 1, ???????ng s??? 1, Ph?????ng s??? 1, Qu???n s??? 1, Th??nh ph??? H?? N???i",
  },

  schedule: {
    start: "20/02/2020",
    end: "26/02/2020",
  },
  comment:
    "C?? s??? v???t c dfd fdf dddddddd fdf dfd  dfd  df dfh???t ch?? dsdddddfdf df df d fdff df ??f fdf dff dfd fdfd dfa t???t",
  result: "?????t",
  status: "??ang th???c hi???n",
  penalty: "thua chung chi 1 nam ",
  samples: [
    {
      id: "A1",
      image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
      inspector: "Cong ty B",
      result: "M???u ?????t an to??n",
      send_at: new Date(),
      receive_at: new Date(),
    },
    {
      id: "A1",
      image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
      inspector: "Cong ty B",
      result: "M???u ?????t an to??n",
      send_at: new Date(),
      receive_at: new Date(),
    },
    {
      id: "A1",
      image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
      inspector: "Cong ty B",
      result: "M???u ?????t an to??n",
      send_at: new Date(),
      receive_at: new Date(),
    },
    {
      id: "A1",
      image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
      inspector: "Cong ty B",
      result: "M???u ?????t an to??n",
      send_at: new Date(),
      receive_at: new Date(),
    },
    {
      id: "A1",
      image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
      inspector: "Cong ty B",
      result: "M???u ?????t an to??n",
      send_at: "",
      receive_at: "",
    },
  ],
};
